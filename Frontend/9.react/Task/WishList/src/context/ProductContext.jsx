import { createContext, useState } from "react";

export const ProductContext = createContext()


const ProductProvider = ({ children }) => {

    const [likedItems, setLikedItems] = useState([]);
    
    return (
        <ProductContext.Provider value={{ likedItems, setLikedItems }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider