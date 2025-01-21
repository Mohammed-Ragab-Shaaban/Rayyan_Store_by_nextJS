'use client'
import React, { useContext } from 'react'
import Cart from './Cart'
import Search from './search'
import {LoginAndRegisterIcon, LogOutAndProfileIcon} from './loginAndRegisterIcon'
import { globalContext } from '@/app/components/context'

export default function LoginCartSearch() {

  const {userToken, setUserToken } = useContext(globalContext);

  return (
    <div>
      <div className='flex justify-end gap-4'>
        <Search d_hidden_block='hidden'/>
        <Cart />
        {userToken !== null ? <LogOutAndProfileIcon  d_hidden_block='hidden' dd_flex='md:flex'/> 
                                        :<LoginAndRegisterIcon d_hidden_block='hidden' dd_flex='md:flex' />}
        
      </div>
    </div>
  )
}
