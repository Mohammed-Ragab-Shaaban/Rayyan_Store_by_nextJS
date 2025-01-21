import React from 'react'
import Logo from './logo/logo'
import LinksWithLogin from './links-with-login/linksWithLogin'
import SideBarIcon from './sideBar/sideBarIcon'
import SideBar from './sideBar/sideBar'

export default function Nav() {
  return (
    <div className='absolute *:hover:text-white top-0 left-0 hover:bg-neutral-800/50 right-0 z-10 transition-all duration-1000'>
        <div className='manualContainer mx-auto'>
            <div className='flex items-center justify-center gap-4 ddddddd'>
                <div className='grow-0'>  <Logo /> </div>
                <div className='grow'> <LinksWithLogin /></div>
                <div className='block md:hidden'><SideBar /></div>
            </div>
        </div>
     </div>
  )
}
