import React from 'react'
import Links from './links/Links'
import LoginCartSearch from './loginCartSearch/loginCartSearch'


export default function LinksWithLogin() {
  return (
    <div className='flex justify-between items-center'>
      <div className='grow'></div>
        <Links d_hidden_block = "hidden" />
        <LoginCartSearch />
    </div>
  )
}
