'use client'
import { useContext } from "react"
import { globalContext } from "./context"
import Swal from "sweetalert2";


export  function AddToCartSinglePage(props) {

    const {countSingleItemPage , setCountSingleItemPage,cartItems , setCartItems} = useContext(globalContext);
    
    const handleAddToCartSinglePage = ()=>{
        props.product.quantity = countSingleItemPage;
        const newQuant = props.product.quantity;
        const updatedItem = {...props.product, quantity: newQuant}
        setCartItems(x => [...cartItems, updatedItem])

          Swal.fire({
            title: `Added ${countSingleItemPage} to cart`,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        setCountSingleItemPage(1);

    }
  return (
    <div>
        <button 
            onClick={handleAddToCartSinglePage}
            className={`border rounded-full py-2 px-6 bg-green-700 text-white  hover:bg-green-600 transition-all duration-500 `}>
            Add to cart
        </button>
    </div>
  )
}


export  function ButtonSinglePage(props) {

    const {cartItems , setCartItems} = useContext(globalContext);
    const {countSingleItemPage , setCountSingleItemPage} = useContext(globalContext);

    const increment =()=>{
        setCountSingleItemPage(countSingleItemPage + 1)
    }

    const decrement =()=>{
        if(countSingleItemPage <= 1){
            setCountSingleItemPage(1)
        }else{
            setCountSingleItemPage(countSingleItemPage - 1)
        }
    }

    return (
      <div className="flex gap-3 justify-center items-center">
        <button onClick={increment} className="w-8 h-8 border rounded-md hover:bg-black hover:text-white transition-colors duration-300" > + </button>
          <span> {countSingleItemPage} </span>                                                
        <button onClick={decrement} className="w-8 h-8 border rounded-md hover:bg-black hover:text-white transition-colors duration-300" > - </button>
      </div>
    )
  }
  