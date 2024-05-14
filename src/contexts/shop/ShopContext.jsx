import { createContext, useReducer, useContext } from 'react'

import PropTypes from 'prop-types'

const ShopContext = createContext()

export const useShopContext = () => {
  return useContext(ShopContext)
}

const initialState = {
  data: [],
}

const ShopProvider = ({ children }) => {
  return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>
}

export default ShopProvider

ShopProvider.propTypes = {
  children: PropTypes.element,
}
