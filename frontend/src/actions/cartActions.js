import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'

export const addToCart = (id, questionQty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    course: {
      course: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      questionQty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.carItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.carItems))
}
