import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getBooksFetch, getBooksSuccess, getBooksFinish, getDeleteBook, updateBooks, createBook } from "./slice";

function* setBooksSaga() {
	yield console.log("dispara setBooksSaga");
	try {
		const books = yield call(() => fetch("http://localhost:4000/books"));
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
		const books = yield call(() => fetch(`http://localhost:4000/books/${action.payload}`, { method: "DELETE" }));
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
		const books = yield call(() => fetch(`http://localhost:4000/books/${payload.id}`,{
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
		const books = yield call(() => fetch(`http://localhost:4000/books/`,{
      method: "POST",
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

function* bookSaga() {
	yield takeEvery(getBooksFetch.type, setBooksSaga);
	yield takeEvery(getDeleteBook.type, deleteBookSaga);
	yield takeEvery(updateBooks.type, updateBooksSaga);
	yield takeEvery(createBook.type, createBookSaga);
}

export default bookSaga;
