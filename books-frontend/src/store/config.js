import createSagaMiddlelware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../pages/books/slice';
import bookSaga from '../pages/books/saga';

const saga = createSagaMiddlelware();
export const store = configureStore({
  reducer: {
    books: booksReducer
  },
  middleware: [saga]
});

saga.run(bookSaga);
