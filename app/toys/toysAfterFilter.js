'use client'
import React, { useContext } from 'react'
import { globalContext } from '../components/context'

export default function ToysAfterFilter() {

    const {toysAfterFilter , setToysAfterFilter , toysFilterStatus,setToysFilterStatus} = useContext(globalContext);

  return (
    <div>toys After Filter</div>
  )
}
