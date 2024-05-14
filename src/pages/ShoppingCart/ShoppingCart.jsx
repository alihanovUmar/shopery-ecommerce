import { Link } from 'react-router-dom'
import { useProviderContext } from '../../contexts/Provider'
import { Button } from '../../components/ui/button'
import { useEffect, useState } from 'react'
import { AddToCart, RemoveFromCart } from '../../utils/api/Cart'

export default function ShoppingCart() {
  const [totalPrice, setTotalPrice] = useState(0)
  const { shoppingCart, setShoppingCart } = useProviderContext()

  const plusProduct = (product) => {
    const updatedProduct = { ...product, quantity: product.quantity + 1 }
    const idx = shoppingCart.findIndex((_product) => _product.id === product.id)
    shoppingCart[idx] = updatedProduct

    setShoppingCart([...shoppingCart])
    AddToCart(shoppingCart[idx])
  }

  const minusProduct = (product) => {
    if (product.quantity === 1) return
    const updatedProduct = { ...product, quantity: product.quantity - 1 }
    const idx = shoppingCart.findIndex((_product) => _product.id === product.id)
    shoppingCart[idx] = updatedProduct

    setShoppingCart([...shoppingCart])
    AddToCart(shoppingCart[idx])
  }

  const removeProductFromCart = (product) => {
    const array = shoppingCart.filter((_product) => _product.id !== product.id)
    setShoppingCart(array)
    RemoveFromCart(product)
  }

  useEffect(() => {
    setTotalPrice(
      shoppingCart.reduce((acc, curVal) => {
        return (acc += curVal.discountPrice * curVal.quantity)
      }, 0)
    )
  }, [shoppingCart])

  return (
    <div className="bg-[#F5F5F5]">
      <div className="container pt-[40px] pb-[34px]">
        <h1 className="text-[32px] text-[#1A1A1A] font-semibold text-center">My shopping Cart</h1>
        <div className="flex gap-x-[24px] mt-[32px]">
          <div className="bg-[#ffff] rounded-[8px] border-[gray]">
            <div className="flex py-[16px] pr-[96px] pl-[20px] gap-x-[314px] items-center">
              <div>
                <h3 className="text-[#808080] text-[14px] font-medium">PRODUCT</h3>
              </div>
              <div className="flex items-center">
                <h3 className="text-[#808080] text-[14px] font-medium">PRICE</h3>
                <h3 className="text-[#808080] ml-[73px] mr-[114px] text-[14px] font-medium">QUANTITY</h3>
                <h3 className="text-[#808080] text-[14px] font-medium">SUBTOTAL</h3>
              </div>
            </div>
            <hr />

            <div>
              <h3 className="text-gray-600 ">{product.prices}</h3>
            </div>
          </div>
          <div className="bg-[#ffff] rounded-[8px] border-[gray] p-[24px] h-[300px]">
            <h3 className="text-[#1A1A1A] text-[20px] font-medium">Cart Total</h3>

            <hr className="bg-[#E5E5E5] h-[1px] mt-[12px] mb-[13px]" />
            <div className="flex items-center justify-between">
              <h3 className=" font-normal text-[14px] text-[#4D4D4D]">Shipping:</h3>
              <h3 className="text-[#1A1A1A] text-[14px] font-medium">Free</h3>
            </div>
            <hr className="bg-[#E5E5E5] h-[1px] mt-[12px] mb-[13px]" />
            <div className="flex items-center justify-between">
              <h3 className=" font-normal text-[14px] text-[#4D4D4D]">Total:</h3>
              <h3 className="text-[#1A1A1A] text-[14px] font-bold">${totalPrice?.toFixed(2)}</h3>
            </div>
            <button className=" py-[16px] px-[102px] bg-[#00B207] hover:bg-[#36bb3b] text-[white] text-[16px] rounded-[43px] mt-[32px]">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
