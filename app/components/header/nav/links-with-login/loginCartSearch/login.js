'use client'
import { globalContext } from "@/app/components/context";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useContext, useRef, useState } from "react";


export default function Login() {

    const [rongEmailOrPassword,setRongEmailOrPassword] = useState(false);
    const { toggleLogin, setToggleLogin,toggleSignUp, setToggleSignUp,userToken, setUserToken } = useContext(globalContext);
    const loginContainer = useRef();
  
    const handleLoginPage =()=>{
        setToggleLogin(!toggleLogin);} 

    const handleSignUpPage =()=>{
        setToggleSignUp(!toggleSignUp);} 
  
  return (
       <div ref={loginContainer} onClick={handleLoginPage} className={`${toggleLogin ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-1000 loginn  fixed flex justify-center items-center bg-neutral-950/70 z-20 w-full h-full`}>
            <div onClick={(e)=>{e.stopPropagation()}} className=" w-11/12 sm:w-5/6 md:w-1/2 bg-white rounded-md p-5 flex flex-col gap-3">
                <div className="text-right cursor-pointer "onClick={handleLoginPage}><FontAwesomeIcon icon={faClose} /> </div>
                <h2 className="text-center text-2xl font-bold">Sign in</h2>
                <p className="text-center text-neutral-600">Please enter your email below to sign in</p>
                <Formik 
                initialValues={{
                    identifier:"",
                    password:""
                }}
                onSubmit={(values)=>{
                    if(values.identifier == "" || values.password == ""){
                        setRongEmailOrPassword(!rongEmailOrPassword);
                    }else{
                        axios.post("http://localhost:1337/api/auth/local", values).then((res)=>{
                            setToggleLogin(!toggleLogin);
                            setUserToken("773e7d03ad971e516a04be0fd8a7b072d464c4fd580c9718f4feb7fd8e083bb92ed138fbf3301a6a366364c725549b7064b2cb6e2d9834e7e7dbabe7a251a1aa146ce2b74540b6c22da0823117da3bf14669442b63522c9d5e6efcde61d872417eeb024c483f0a5803211cdcabbd576e60d9929b58d589dc3dc484d85b8b5e1c");
                            localStorage.setItem("token",userToken);
                        }).catch((error)=>{
                            setRongEmailOrPassword(!rongEmailOrPassword);
                        })
                    }
                }}
                
                    
                >
                    <Form>
                        <div className="flex flex-col *:border gap-2 *:p-4 *:rounded-full ">
                            <Field type="email" name="identifier" placeholder="Your email*" onKeyUp ={(e)=>{setRongEmailOrPassword(false);}} />
                            <Field type="password" name="password" placeholder="password*" onKeyUp ={(e)=>{setRongEmailOrPassword(false);}} />
                        </div>
                        <div className={` ${rongEmailOrPassword ? "block" : "hidden"} text-red-500 text-center`}><p>rong email or password</p></div>
                        <div className="my-4 pl-6"><Link href={'#'}>forget your password</Link></div>
                        <div className="flex flex-col *:border gap-2 *:p-4 *:rounded-full">
                            <button type="submit" className="bg-black text-white hover:bg-neutral-800 transition-colors duration-500">login</button>
                            <button onClick={(e)=>{handleLoginPage(),handleSignUpPage()}} className="hover:bg-black hover:text-white transition-colors duration-500">Create Account</button>
                        </div>
                    </Form>
                </Formik>
            </div>
       </div>
  )
}



