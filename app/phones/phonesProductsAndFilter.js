'use client'
import  { useContext, useEffect, useState } from 'react'
import PhonesFilter from './phonesFilter'
import PhonesProducts from './phonesProducts'
import axios from 'axios';
import { globalContext } from '../components/context';

export default function PhonesProductsAndFilter() {

    const [phonesProducts ,setPhonesProducts] = useState([]);
    const {phonesAfterFilter,setPhonesAfterFilter } = useContext(globalContext);

    useEffect(()=>{
        axios.get("http://localhost:1337/api/phones?populate=*").then((res)=>{
            setPhonesProducts(res.data.data);  
        })
    },[])

  return (
     <div>
            <div className='manualContainer'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-3 p-2'>
                        <div className='border-r-2'>
                            <PhonesFilter />
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-9'>
                          <PhonesProducts phonesProducts={phonesAfterFilter.length >= 1 ? phonesAfterFilter : phonesProducts} />
                    </div>
                </div>
            </div>
        </div>
  )
}
