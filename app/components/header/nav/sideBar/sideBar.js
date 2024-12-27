'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Links from "../links-with-login/links/Links";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Login from "../links-with-login/loginCartSearch/login";
import Search from "../links-with-login/loginCartSearch/search";


export default function SideBar() {

const [toggleState,setToggleState] = useState(true);

  const sideBarToggle = ()=>{
      setToggleState(!toggleState);
  }
console.log(toggleState);


  return (
    <div>
      <FontAwesomeIcon icon={faBars} onClick={sideBarToggle} className='text-white size-6 '/>
        <div  className={`w-60 absolute bg-neutral-800 ${toggleState ? 'scale-x-0' : 'scale-x-100'} right-0 top-0 origin-right transition-all`} style={{height:"100vh"}}>
            
            <div className="text-right">
                  <span onClick={sideBarToggle} className="p-2 inline-block hover:bg-neutral-950/50">
                    <FontAwesomeIcon icon={faClose} className="size-4 text-white"/>
                  </span>
            </div>
            <div>
              <Search d_hidden_block='block' />
            </div>
            <div >
                <Links d_hidden_block = "block"/>
            </div>
            <div>
              <Login d_hidden_block='block' dd_flex='flex' />
            </div>

        </div>
    </div>
  )
}
