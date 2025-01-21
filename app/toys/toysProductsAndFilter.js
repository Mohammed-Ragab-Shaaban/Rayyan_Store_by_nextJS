"use client"
import  { useContext, useEffect, useState } from 'react'
import ToysProducts from './toysProducts'
import ToysFilter from './toysFilter'
import { globalContext } from '../components/context';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ToysProductsAndFilter() {

    const [toysProducts ,setToysProducts] = useState([]);
    const {toysAfterFilter , setToysAfterFilter , toysFilterStatus,setToysFilterStatus} = useContext(globalContext);

    useEffect(()=>{
        axios.get("http://localhost:1337/api/toys?populate=*").then((res)=>{
            setToysProducts(res.data.data);  
        })
    },[])

  return (
    <div>
        <div className='manualContainer'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-3 p-2'>
                    <div className='border-r-2'>
                        <ToysFilter />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-9'>
                      <ToysProducts toysProducts={toysAfterFilter.length >= 1 ? toysAfterFilter : toysProducts} />
                </div>
            </div>
        </div>
    </div>
  )
}
