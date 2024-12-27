'use client'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function ArrowForLinks() {
    const [ upDown , setUpDown] =  useState(false);
    // useEffect(()=>{
      
    // },[])

  return (
    <span onMouseOver={()=>{setUpDown(true)}} onMouseLeave={()=>{setUpDown(false)}}>
        {upDown ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
    </span>
 
  )
}
