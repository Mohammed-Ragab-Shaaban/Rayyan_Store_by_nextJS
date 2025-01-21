import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Search(props) {
  return (

      <div className={`relative ${props.d_hidden_block} flex justify-center md:block `}>
        <div>
            <input type='search'
                  id='search'
                  name='search' 
                  className='rounded-full border bg-white/50 py-1 pl-9 '/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='size-5 absolute top-2 left-6 md:left-3' />
        </div>
      </div>

  )
}
