import { call, put, takeEvery } from "redux-saga/effects";
import { getBooksFetch, getBooksSuccess, getBooksFinish, getDeleteBook, updateBooks, createBook, setCreateSuccess } from "./slice";

const URL = process.env.REACT_APP_API_URL;

function* setBooksSaga() {
	yield console.log("dispara setBooksSaga");
	try {
		const books = yield call(() => fetch(`${URL}/books`));
		const formattedBooks = yield books.json();
		yield put(getBooksSuccess(formattedBooks));
	} catch (error) {
		yield console.error(error);
	} finally {
		yield put(getBooksFinish());
	}
}

function* deleteBookSaga(action) {
	try {
		const books = yield call(() => fetch(`${URL}/books/${action.payload}`, { method: "DELETE" }));
		const formattedBooks = yield books.json();
		if (formattedBooks.status === "ok") {
			// success message
			yield call(setBooksSaga);
		}
	} catch (error) {
		yield console.error(error);
	} finally {
		yield put(getBooksFinish());
	}
}

function* updateBooksSaga(action) {
  const { payload } = action;
	try {
		const books = yield call(() => fetch(`${URL}/books/${payload.id}`,{
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload)
    }));
		const formattedBooks = yield books.json();
		if (formattedBooks.status === "ok") {
			// success message
			yield call(setBooksSaga);
		}
	} catch (error) {
		yield console.error(error);
	} finally {
		yield put(getBooksFinish());
	}
}

function* createBookSaga(action) {
	const { payload } = action;
	try {
		const books = yield call(() => fetch(`${URL}/books/`,{
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload)
    }));
		const formattedBooks = yield books.json();
		if (formattedBooks.status === "ok") {
			// success message
			yield put(setCreateSuccess(true))
			yield call(setBooksSaga);
		}
	} catch (error) {
		yield console.error(error);
	} finally {
		yield put(getBooksFinish());
	}
}

function* bookSaga() {
	yield takeEvery(getBooksFetch.type, setBooksSaga);
	yield takeEvery(getDeleteBook.type, deleteBookSaga);
	yield takeEvery(updateBooks.type, updateBooksSaga);
	yield takeEvery(createBook.type, createBookSaga);
}

export default bookSaga;
