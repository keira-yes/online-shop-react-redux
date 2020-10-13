import axios from 'axios'

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
const ADD_TO_CART = 'ADD_TO_CART'

const initialState = {
  productsList: [],
  cart: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCTS:
      return { ...state, productsList: payload }
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] }
    default:
      return state
  }
}

export const updateProducts = () => {
  return (dispatch) => {
    axios('http://localhost:8090/api/v1/products').then(({ data }) => {
      dispatch({ type: UPDATE_PRODUCTS, payload: data })
    })
  }
}

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload }
}
