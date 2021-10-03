import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/reducer'

const initialState = {
  categories: [],
  loading: true,

}
export const MealsContext = React.createContext()

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.setCategories = (categories) => dispatch({
    type: 'SET_CATEGORIES', payload: categories,
  })

  value.addFavorites = (item) => dispatch({
    type: 'ADD_MEAL', item,
  })

  return (
    <MealsContext.Provider value={value}>
      {children}
    </MealsContext.Provider>)
}