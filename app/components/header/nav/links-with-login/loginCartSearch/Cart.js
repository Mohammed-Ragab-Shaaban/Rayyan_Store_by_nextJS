import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Cart() {
  return (
    <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faCartShopping} className='text-white size-5' />
    </div>
  )
}
