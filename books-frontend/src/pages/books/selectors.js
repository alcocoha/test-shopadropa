import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';

const selectorBooks = (state) => state.books || initialState;

export const selectorBooksList = createSelector(selectorBooks, substate => substate.books);