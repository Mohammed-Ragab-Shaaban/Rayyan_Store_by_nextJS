'use client'
import { globalContext } from "@/app/components/context"
import { faClose, faL, faRemove, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react"
import Swal from "sweetalert2";


export default function CartItems() {
    const {CartItemsStatus, setCartItemsStatus,cartItems , setCartItems,ren , setRen} = useContext(globalContext)
    const menuItems = useRef();
    const tl = useRef();
    const [discountAmount , setDiscountAmount] = useState(0);
    const [subtotal , setSubtotal] = useState(0);
    const [deliveryFees , setDeliveryFees] = useState(50);
    const [ checkOutStatus , setCheckOutStatus] = useState(false);
    const discount = useRef();
   
    const increaseItem = (index)=>{
        cartItems[index].quantity = cartItems[index].quantity + 1;
        const newQuant = cartItems[index].quantity;
        const updatedItem = {...cartItems[index], quantity: newQuant}

        const cartItemsWithupdatedItem =   cartItems.map((el,indx)=>{
            if(el.documentId == updatedItem.documentId && el.category == updatedItem.category){
                return (
                    {...el,quantity: newQuant}
                )        
            }else{
                return el
            }
        })
        setCartItems(cartItemsWithupdatedItem)

        // for subtotal
        const sub = cartItemsWithupdatedItem.map((el,index)=>{
            return (+(el.offer_status ? el.offered_price :el.price) *  +el.quantity)
        }).reduce((acc,current)=>{
            acc += current
            return acc
        })
        setSubtotal(sub);
        console.log(sub)
        setCheckOutStatus(false);
    }

    const decreaseItem = (index)=>{
        cartItems[index].quantity = cartItems[index].quantity <= 1 ? 1 : cartItems[index].quantity - 1;
        const newQuant = cartItems[index].quantity;
        const updatedItem = {...cartItems[index], quantity: newQuant}
        // console.log(index);
        // console.log(updatedItem);
        // console.log(newQuant);
     const cartItemsWithupdatedItem =   cartItems.map((el,indx)=>{
            if(el.documentId == updatedItem.documentId && el.category == updatedItem.category){
                return (
                    {...el,quantity: newQuant}
                )        
            }else{
                return el
            }
        })
        setCartItems(cartItemsWithupdatedItem)
        
            // for subtotal
            const sub = cartItemsWithupdatedItem.map((el,index)=>{
                return (+(el.offer_status ? el.offered_price :el.price) *  +el.quantity)
            }).reduce((acc,current)=>{
                acc += current
                return acc
            })
            setSubtotal(sub);
            setCheckOutStatus(false);

    }

    const deleteItem = (index)=>{
        cartItems.splice(index,1);
        // serRender(!render);
        setRen();
        setCheckOutStatus(false);
    
        Swal.fire({
        position: "top",
        icon: "success",
        title: "item deleted",
        showConfirmButton: false,
        timer: 1500
        });
    }

    const updateAndConfirm=()=>{
        const cartItemsWithupdatedItem =   cartItems.map((el,indx)=>{
                return el 
        })
        setCartItems(cartItemsWithupdatedItem)

            // for subtotal
            const sub = cartItemsWithupdatedItem.map((el,index)=>{
                return (+(el.offer_status ? el.offered_price :el.price) *  +el.quantity)
            }).reduce((acc,current)=>{
                acc += current
                return acc
            })
            setSubtotal(sub);

            setCheckOutStatus(true);
    }

   const handleDiscount = ()=>{
    setDiscountAmount(discount.current.value)
   }

    useEffect(()=>{
        tl.current = gsap.timeline({
            paused:true
        })
        tl.current.to(menuItems.current ,{top:0,duration:1})
    },[])

    useEffect(()=>{
        CartItemsStatus ? tl.current.play() : tl.current.reverse();
    },[CartItemsStatus])


  return (
    <div ref={menuItems} className="bg-white fixed left-0 -top-full z-30 h-screen w-full overflow-auto">
        <div className="manualContainer">
           <div className="p-5">
                <h1 className="text-4xl font-bold py-4">Your shoping cart</h1>
                <div className="flex flex-col md:flex-row">
                    <div className=" grow-2 px-5 overflow-auto">
                        <table className="table-fixed w-full text-center">
                            <thead>
                                <tr className="border-b-2 bg-neutral-100 *:py-4">
                                    <th className="w-24">Product</th>
                                    <th className="w-24">Price</th>
                                    <th className="w-36">Quantity</th>
                                    <th className="w-24">Total</th>
                                    <th className="w-24">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((el,index)=>{
                                        return(
                                            <tr key={index} className="border-b-2">
                                                <td className="flex justify-center items-center p-2">
                                                    <div style={{width:"90%"}}>
                                                        <Image src={`http://localhost:1337${el.master_image[0].url}`} 
                                                                alt='toys' 
                                                                width={200}
                                                                height={300}
                                                                style={{objectFit:'contain',objectPosition:"50% 50%"}}
                                                                className='w-full h-full rounded-lg border' />
                                                    </div>
                                                </td>
                                               
                                                <td>{el.offer_status ? el.offered_price :el.price} L.E</td>
                                                <td className="*:mx-2">
                                                     <button onClick={()=>{increaseItem(index)}} className="w-8 h-8 border rounded-md hover:bg-black hover:text-white transition-colors duration-300" > + </button>
                                                       <span>  {el.quantity}  </span>
                                                       
                                                     <button onClick={()=>{decreaseItem(index)}} className="w-8 h-8 border rounded-md hover:bg-black hover:text-white transition-colors duration-300" > - </button>
                                                </td>
                                                <td>{(el.offer_status ? el.offered_price :el.price) *  el.quantity} L.E</td>
                                                <td><FontAwesomeIcon onClick={()=>{deleteItem(index)}} className="hover:text-red-500 hover:cursor-pointer" icon={faTrashCan}/></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="flex flex-col md:flex-row justify-end gap-2 my-3 ">
                             <button className="hover:border  hover:bg-neutral-100 hover:text-black w-full  px-6  py-2 rounded-full bg-black text-white transition-colors duration-500"
                                onClick={updateAndConfirm}>
                                    update and confirm
                            </button>
                            <button className="hover:border  hover:bg-neutral-100 hover:text-black w-full  p-2 rounded-full bg-black text-white transition-colors duration-500"
                                onClick={()=>{setCartItemsStatus(!CartItemsStatus)}}>
                                    Back
                            </button>
                        </div>
                    </div>

                    <div className="grow border p-3 *:my-2">
                        <h5 className="font-bold">Order Summary</h5>
                        <div className="flex gap-2">
                            <input ref={discount} className="py-1 px-2 border rounded-full" type="text" placeholder="discount voucher"/>
                            <button onClick={handleDiscount}>Apply</button>
                        </div>
                        <div className="flex justify-between text-neutral-500 text-sm">
                            <span>Sub Total</span>
                            <span className="font-bold text-black">{subtotal} L.E</span>
                        </div>
                        <div className="flex justify-between text-neutral-500 text-sm">
                            <span>Discount</span>
                            <span className="font-bold text-black">{discountAmount} L.E</span>
                        </div>
                        <div className="flex justify-between text-neutral-500 text-sm">
                            <span>Delivery fees</span>
                            <span className="font-bold text-black">{deliveryFees} L.E</span>
                        </div>
                        <hr />
                        <div className="flex justify-between *:font-bold text-sm">
                            <span>Total</span>
                            <span>{subtotal - discountAmount + deliveryFees} L.E</span>
                        </div>
                        <button className={`${checkOutStatus ? "scale-y-100" : "scale-y-0"} hover:border block w-full py-2 hover:text-black hover:bg-neutral-100 rounded-full bg-black text-white transition-all duration-500`}>
                            Check out
                        </button>
                        <div className={`${checkOutStatus ? "scale-y-0" : "scale-y-100"} origin-top transition-all duration-500 text-center text-red-500 text-sm`}><p>To checkOut please update and confirm your choices</p></div>
                    </div>
                </div>
           </div>
        </div>
        
    </div>
  )
}
