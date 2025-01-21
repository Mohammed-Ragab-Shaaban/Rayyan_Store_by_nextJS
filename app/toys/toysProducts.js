import Image from 'next/image';
import React from 'react'
import AddToCartIcon from '../components/addToCartIcon';
import {QuickViewIcon, QuickViewImages} from '../components/quickViewIcon';
import {VideoIcon, VideoView} from '../components/videoIcon';
import Link from 'next/link';

export default  function ToysProducts(props) {

    // axios.get("http://localhost:1337/api/toys?populate=*").then((res)=>{
    //     const toysProducts =  res.data.data;
    // })
    // const toysData = await fetch("http://localhost:1337/api/toys?populate=*");
    // const toysInJSON = await toysData.json();
    // const toysProducts = toysInJSON.data
    // console.log(props.toysProducts);

  return (
    <>
        {/* this div for image show icon (quickViewIcon) */}
        <QuickViewImages />
        <VideoView />
        <div className='flex flex-wrap gap-4 py-5 justify-center items-center '>
            {
               props.toysProducts.map((el,index)=>{
                    return(
                        <div key={index} className={`${el.stock_status ? "*:hover:scale-100" : null } hover:drop-shadow w-44 hover:border transition-all duration-300 h- rounded-md bg-white`}>
                            <div className='h-44 w-full rounded-t-md bg-white '>
                                <Link href={`./toys/${el.documentId}`}>
                                    <Image  src={`http://localhost:1337${el.master_image[0].url}`} 
                                            alt='toys' 
                                            width={200}
                                            height={300}
                                            style={{objectFit:'contain',objectPosition:"50% 50%"}}
                                            className=' transition-transform duration-500 w-full h-full' />
                                </Link>
                            </div>
                            
                            <div className='icons scale-0 flex justify-center gap-x-2 transition-all duration-300 w-full p-1'>
                                    <AddToCartIcon item={el} /> <QuickViewIcon images={el.images} /> <VideoIcon video={el.video} />
                            </div>

                            <hr />
                        <div className='p-2 bg-white'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-sm' style={el.stock_status ? {color:"green"}:{color:"red"}}> {el.stock_status ? "• in stock" : "• out of stock"}</div>
                                    <div className='text-sm' style={el.offer_status ? {display:"block"} : {display:"none"}}><p>{el.offered_price} L.E</p></div>
                                    <div className='text-sm' style={el.offer_status ? {textDecoration:"line-through",color:"gray"} : null } ><p>{el.price} L.E</p></div>
                                </div>
                                <div className='text-center hover:text-green-700 transition-colors duration-300'><p>{el.name}</p></div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
