'use client'
const { createContext, useState } = require("react");




const globalContext = createContext();

const GlobalContextProvider = ({children})=>{

    const [xx, setX] = useState("Hello from context");
    const [toggleShowImages , setToggleShowImages] = useState(false);
    const [toggleShowVideo,setToggleShowVideo] = useState(false);
    const [quickViewImages, setQuickViewImages] = useState([]);
    const [quickViewVideo, setQuickViewVideo] = useState([]);
    const [cartItems , setCartItems] = useState([]);

    return(
        <globalContext.Provider value={{xx,setX,toggleShowImages,setToggleShowImages,
                              quickViewImages, setQuickViewImages,toggleShowVideo,setToggleShowVideo,
                              quickViewVideo, setQuickViewVideo , cartItems , setCartItems
        }}>

            {children}
        </globalContext.Provider>
    )
}



export {globalContext , GlobalContextProvider};


