'use client'
const { createContext, useState, useReducer } = require("react");




const globalContext = createContext();

const GlobalContextProvider = ({children})=>{

    const [xx, setX] = useState("Hello from context");
    const [toggleShowImages , setToggleShowImages] = useState(false);
    const [toggleShowVideo,setToggleShowVideo] = useState(false);
    const [quickViewImages, setQuickViewImages] = useState([]);
    const [quickViewVideo, setQuickViewVideo] = useState([]);
    const [cartItems , setCartItems] = useState([]);
    const [toggleLogin, setToggleLogin ] = useState(false);
    const [toggleSignUp, setToggleSignUp ] = useState(false);
    const [loginLogOut, setLoginLogOut ] = useState(false);
    const [userToken, setUserToken ] = useState(null);
    const [CartItemsStatus, setCartItemsStatus ] = useState(false);
    const [ren , setRen] = useReducer(x => x + 1 , 0);
    const [countSingleItemPage , setCountSingleItemPage] = useState(1);
    const [toysAfterFilter , setToysAfterFilter] = useState([]);
    const [toysFilterStatus , setToysFilterStatus] = useState(false);
    const [phonesAfterFilter,setPhonesAfterFilter] =  useState([]);
    const [activeSlide, setActiveSlide] = useState(0);



    return(
        <globalContext.Provider value={{xx,setX,toggleShowImages,setToggleShowImages,
                              quickViewImages, setQuickViewImages,toggleShowVideo,setToggleShowVideo,
                              quickViewVideo, setQuickViewVideo , cartItems , setCartItems,
                              toggleLogin, setToggleLogin,toggleSignUp, setToggleSignUp,
                              loginLogOut, setLoginLogOut,userToken, setUserToken,
                              CartItemsStatus, setCartItemsStatus , ren , setRen,
                              countSingleItemPage , setCountSingleItemPage,
                              toysAfterFilter , setToysAfterFilter,
                              toysFilterStatus,setToysFilterStatus,
                              phonesAfterFilter,setPhonesAfterFilter,
                              activeSlide, setActiveSlide
        }}>

            {children}
        </globalContext.Provider>
    )
}



export {globalContext , GlobalContextProvider};


