import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import works from './components/search/searchSlice';
import list from './components/search/listSlice';

export default configureStore({
  reducer: {
    works,
    list,
  },
  middleware: [thunk],
});
