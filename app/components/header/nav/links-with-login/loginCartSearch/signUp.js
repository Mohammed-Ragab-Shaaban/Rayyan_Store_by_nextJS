'use client'
import { globalContext } from '@/app/components/context'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function SignUp() {

  const {toggleSignUp, setToggleSignUp, toggleLogin, setToggleLogin} = useContext(globalContext)

  const handleSignUpPage =()=>{
    setToggleSignUp(!toggleSignUp); 
} 
const handleLoginPage =()=>{
    setToggleLogin(!toggleLogin); 
} 

  return (
    <div onClick={handleSignUpPage} className={`${toggleSignUp ? "opacity-100 scale-100": "scale-0 opacity-0"} transition-all duration-1000 fixed flex justify-center items-center bg-neutral-950/70 z-20 w-full h-full`}>
            <div onClick={(e)=>{e.stopPropagation()}} className=" w-11/12 sm:w-5/6 md:w-1/2 bg-white rounded-md p-5 flex flex-col gap-3">
                <div className="text-right cursor-pointer "onClick={handleSignUpPage}><FontAwesomeIcon icon={faClose} /> </div>
                <h2 className="text-center text-2xl font-bold">Create Account</h2>
                <p className="text-center text-neutral-600">Please register below to create an account</p>
                <Formik 
                initialValues={{
                  firstName:"",
                  lastName:"",
                  username:"",
                  identifier:"",
                  password:""
                }}
                onSubmit={(values)=>{
                    if(values.identifier == "" || values.password == "" || values.firstName == "" || values.lastName == "" || values.username == ""){
                        null
                    }else{
                        
                        axios.post("http://localhost:1337/api/auth/local/register", values).then((res)=>{
                                console.log("successful login")
                                console.log(res)
                        }).catch((err)=>{
                            console.log("you have to register")
                            console.log(err)
                        })
                    }
                   
                }}
                >
                    <Form>
                        <div className="flex flex-col *:border gap-2 *:p-4 *:rounded-full ">
                            <Field type="text" name="firstName" placeholder="First name" />
                            <Field type="text" name="lastName" placeholder="Last name" />
                            <Field type="text" name="username" placeholder="User name (must be unique)" />
                            <Field type="email" name="identifier" placeholder="Your email*"/>
                            <Field type="password" name="password" placeholder="password*" />
                        </div>
                        <div className="my-4 pl-4 text-neutral-600">
                            <p> your personal data will be used to support your experience 
                                throughout this website,to manage access to your account and
                                for other purposes described in our <Link href={'#'}>privacy policy</Link></p>
                        </div>
                        <div className="flex flex-col *:border gap-2 *:p-4 *:rounded-full">
                            <button onClick={(e)=>{handleLoginPage(),handleSignUpPage()}} type="submit" className="bg-black text-white hover:bg-neutral-800 transition-colors duration-500">Create Account</button>
                            <button onClick={(e)=>{handleLoginPage(),handleSignUpPage()}} className="hover:bg-black hover:text-white transition-colors duration-500">Login</button>
                        </div>
                    </Form>
                </Formik>
            </div>
       </div>
  )
}
