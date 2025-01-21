'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Links from "../links-with-login/links/Links";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Search from "../links-with-login/loginCartSearch/search";
import {LoginAndRegisterIcon, LogOutAndProfileIcon} from "../links-with-login/loginCartSearch/loginAndRegisterIcon";
import { globalContext } from "@/app/components/context";


export default function SideBar() {

const [toggleState,setToggleState] = useState(true);
const {userToken, setUserToken } = useContext(globalContext);

  const sideBarToggle = ()=>{
      setToggleState(!toggleState);
  }


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
               {userToken !== null ? <LogOutAndProfileIcon  d_hidden_block='block' dd_flex='flex'/> 
                                                :<LoginAndRegisterIcon d_hidden_block='block' dd_flex='flex' />}
            </div>

        </div>
    </div>
  )
}
