import React from 'react'
import Cart from './Cart'
import Login from './login'
import Search from './search'

export default function LoginCartSearch() {
  return (
    <div>
      <div className='flex justify-end gap-4'>
        <Search d_hidden_block='hidden'/>
        <Cart />
        <Login d_hidden_block='hidden' dd_flex='md:flex ' />
      </div>
    </div>
  )
}
