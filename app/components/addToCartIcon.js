'use client'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import './forIconToolTips.css'
import Swal from 'sweetalert2'
import { globalContext } from './context'

export default function AddToCartIcon(props) {

  const {cartItems , setCartItems} = useContext(globalContext);

 const added_ToCart = ()=>{
  Swal.fire({
    title: 'Added to cart',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
  // setSelectedProduct(z => [...selectedProduct,el]);
  setCartItems(x => [...cartItems, props.item])
  console.log(cartItems);
 }
 
  return (
    <span onClick={added_ToCart} className='bg-black relative *:first:hover:opacity-100 text-white py-1 px-2'>
      <span className='addToCartIconToolTip opacity-0 absolute transition-opacity duration-500 -top-8 bg-black w-20 p-1 rounded text-xs text-center left-0'>Add to Cart</span>
      <FontAwesomeIcon icon={faBasketShopping} />
    </span>
  )
}
