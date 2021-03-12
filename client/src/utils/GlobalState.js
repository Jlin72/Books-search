import React, { createContext, useContext, useReducer } from 'react';
import { SAVE_BOOK, DELETE_SAVED, FIND_BOOK, LOADING } from './actions';

const bookContext = createContext();
const { Provider } = bookContext;

const reducer = (state, action) => {
  switch(action.type) {
    case SAVE_BOOK: {
      return {
        ...state,
        savedBooks: [...action.savedBooks],
        loading: false
      };
    }
    case DELETE_SAVED: {
      return {
        ...state,
        books: state.books.filter(book=> book.id !== action.id),
        loading: false
      };
    }
    case FIND_BOOK: {
      return {
        ...state,
        books: [...action.books],
        loading: false
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    default: 
      return state;
  }
};

const BookProvider = ({value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    savedBooks: [],
    books:[],
    loading: false
  })
  
  return <Provider value={[state, dispatch]} {...props} />
}

const useBookContext = () => {
  return useContext(bookContext);
}

export { BookProvider, useBookContext };