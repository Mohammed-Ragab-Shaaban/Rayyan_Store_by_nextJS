'use client'
import { faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import Login from './login'
import SignUp from './signUp'
import { globalContext } from '@/app/components/context'

export  function LoginAndRegisterIcon(props) {

  const { toggleLogin, setToggleLogin} = useContext(globalContext);
  const {toggleSignUp, setToggleSignUp} = useContext(globalContext);

  const handleLoginPage =()=>{
    setToggleLogin(!toggleLogin);} 

    const handleSignUpPage =()=>{
      setToggleSignUp(!toggleSignUp); } 
  
  return (
    <div className={`*:last:hover:block relative  ${props.d_hidden_block} flex-col ${props.dd_flex} items-center justify-center`}>
        <FontAwesomeIcon icon={faUser} className='size-5 ' />
        <div className='hidden top-full md:absolute *:text-white *:md:inline-block *:border *:p-1 *:w-20 *:bg-neutral-700 ' style={{minWidth:"160px"}}>
            <button onClick={handleLoginPage} className={`rounded-l-full hover:bg-white hover:border-neutral-950 hover:text-neutral-950 transition-all duration-500`}>Login</button>
            <button onClick={handleSignUpPage} className={`rounded-r-full hover:bg-white hover:border-neutral-950 hover:text-neutral-950 transition-all duration-500`}>Sign Up</button>
        </div>
    </div>
  )
}

export  function LogOutAndProfileIcon(props) {

  const {userToken, setUserToken } = useContext(globalContext);

  const  handleLogOut =()=>{
    localStorage.removeItem("token");
    setUserToken(null);
  }

  return (
    <div className={`*:last:hover:block relative  ${props.d_hidden_block} flex-col ${props.dd_flex} items-center justify-center`}>
        <FontAwesomeIcon icon={faUserCheck} className='size-5 ' />
        <div className='hidden top-full md:absolute *:text-white *:md:inline-block *:border *:p-1 *:w-20 *:bg-neutral-700 ' style={{minWidth:"160px"}}>
            <button className={`rounded-l-full hover:bg-white hover:border-neutral-950 hover:text-neutral-950 transition-all duration-500`}>Profile</button>
            <button onClick={handleLogOut} className={`rounded-r-full hover:bg-white hover:border-neutral-950 hover:text-neutral-950 transition-all duration-500`}>Log Out</button>
        </div>
    </div>
  )
}

