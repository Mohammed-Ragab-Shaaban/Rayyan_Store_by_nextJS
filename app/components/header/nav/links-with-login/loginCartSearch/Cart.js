'use client'
import { globalContext } from '@/app/components/context'
import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

export default function Cart() {
  const {cartItems , setCartItems,CartItemsStatus, setCartItemsStatus,toggleLogin, setToggleLogin} = useContext(globalContext);

 const hsndleCartItems =()=>{
    if( localStorage.getItem("token")){
    setCartItemsStatus(!CartItemsStatus)
    }else{
      setToggleLogin(!toggleLogin);
    }
   
  }

  return (
    <div onClick={hsndleCartItems} className='flex justify-center items-center gap-1 cursor-pointer'>
        <FontAwesomeIcon icon={faCartShopping} className='size-5' /> 
        <span className='w-6 h-6 bg-neutral-600/50 text-white rounded-full flex justify-center items-center'><span> {cartItems.length} </span></span>
    </div>
  )
}
