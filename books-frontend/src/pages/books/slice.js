import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    books: [],
    createSuccess: false
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
    },
    setCreateSuccess: (state, actions) => {
      state.createSuccess = actions.payload;
    }
  }
});

export const { getBooksFetch, getBooksSuccess, getBooksFinish, getDeleteBook, updateBooks, createBook, setCreateSuccess } = bookSlice.actions;
export const {initialState} = bookSlice;
export default bookSlice.reducer;
