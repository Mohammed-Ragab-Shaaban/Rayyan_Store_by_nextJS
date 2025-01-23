'use client'
import { faFilter, faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useContext, useRef, useState } from 'react'
import { globalContext } from '../components/context';
import axios from 'axios';


export default function ToysFilter() {

    const {toysAfterFilter , setToysAfterFilter, toysFilterStatus,setToysFilterStatus} = useContext(globalContext);
    const [searchValue , setSearchValue] = useState();
    const min =  useRef();
    const max =  useRef();
//    console.log(min.current.value + " - " +  max.current.value);

    const searchSubmit = ()=>{
        event.preventDefault();
        axios.get("http://localhost:1337/api/toys?populate=*").then((res)=>{
            const toys = res.data.data ;
            const filteredToys =   toys.filter((el,index)=>{
                return el.name.includes(searchValue);
            })
            setToysAfterFilter(filteredToys);
            console.log(filteredToys);
        }).catch((error)=>{
            console.log("rong axios");
        })
    }

    const searchByPrice =()=>{
        event.preventDefault();
        axios.get("http://localhost:1337/api/toys?populate=*").then((res)=>{
            const toys = res.data.data ;
            const filteredToys =   toys.filter((el,index)=>{
                return el.price >= min.current.value && el.price <= max.current.value;
            })
            setToysAfterFilter(filteredToys);
            console.log(filteredToys);
        }).catch((error)=>{
            console.log("rong axios");
        })
    }

    const showAllProducts =()=>{
        event.preventDefault();
        setToysAfterFilter([]);
    }

  return (
    <div>
         <div className='border-b pt-4 pb-2'><FontAwesomeIcon icon={faSliders} /> Filter</div>
         <div>
            <form  onSubmit={searchSubmit}>
                <label> <h5 className='py-2'>Search by name</h5></label>
             <div className='flex justify-end *:grow p-2 '>
                <input type='search' 
                        onChange={(e)=>{setSearchValue(e.target.value)}} 
                        name='search' id='search' 
                        placeholder='search by name'
                        className='border rounded-s-md p-2'/>
                <button type='submit' className='bg-green-600 text-white p-2 rounded-e-md'>Go</button>
             </div>
            </form>
         </div>
         <hr className='my-3'/>
         <div>
            <form>
                <h5 className='py-1 mb-3' >Range of price</h5>
                <label>Min: </label>
                <input className='w-20 border p-1 minPricrInput' 
                       min={0}
                        lang='en'
                        inputMode='numeric'
                       type='number' 
                       name='firstPrice' 
                       id='firstPrice' 
                        ref={min}
                       /> 
                       <span> - </span>
                <label>Max: </label>
                <input className=' w-20 border p-1 maxPricrInput' 
                       type='number' 
                       name='lastPrice' 
                       id='lastPrice' 
                        ref={max}
                       /> 
               
                <div className='p-2 '>
                    <button type='submit'
                            onClick={searchByPrice}
                            className='bg-green-600 block w-full my-2 text-white py-1 px-4 rounded-md'>
                         Go
                    </button>
                    <button type='submit'
                            onClick={showAllProducts}
                            className='bg-green-600 block w-full text-white py-1 px-4 rounded-md'>
                         All Product
                    </button>
                </div>
            </form>
         </div>
    </div>
  )
}
