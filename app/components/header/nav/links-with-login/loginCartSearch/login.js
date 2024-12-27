import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Login(props) {
  return (
    <div className={`*:last:hover:block relative  ${props.d_hidden_block} flex-col ${props.dd_flex} items-center justify-center`}>
        <FontAwesomeIcon icon={faUser} className='size-5 text-white' />
        <div className='hidden top-full md:absolute *:text-white *:md:inline-block *:border *:p-1 *:w-20 *:bg-neutral-700 ' style={{minWidth:"160px"}}>
            <button className={`rounded-l-full hover:bg-white hover:border-neutral-950 hover:text-neutral-950 transition-all duration-500`}>Login</button>
            <button className={`rounded-r-full hover:bg-white hover:border-neutral-950 hover:text-neutral-950 transition-all duration-500`}>Sign Up</button>
        </div>
    </div>
  )
}
