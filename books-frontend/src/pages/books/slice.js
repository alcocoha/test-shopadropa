import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    books: []
  },
  reducers: {
    getBooksFetch: (state) => {
      //immer modify this directly
      state.isLoading = true;
    },
    getBooksSuccess: (state, actions) => {
      state.books = actions.payload;
      state.isLoading = false;
    },
    getBooksFinish: (state, actions) => {
      state.isLoading = false;
    },
    getDeleteBook: (state) => {
      return state;
    },
    updateBooks: (state) => {
      return state;
    },
    createBook: (state) => {
      return state;
    }
  }
});

export const { getBooksFetch, getBooksSuccess, getBooksFinish, getDeleteBook, updateBooks, createBook } = bookSlice.actions;
export const {initialState} = bookSlice;
export default bookSlice.reducer;
