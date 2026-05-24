import { createContext, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const decreaseCart = (itemId) => {
        setCartItems((prev) => {
            const updated = { ...prev };

            if (!updated[itemId]) return prev;

            if (updated[itemId] > 1) {
                updated[itemId] -= 1;
            } else {
                delete updated[itemId];
            }

            return updated;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updated = { ...prev };
            delete updated[itemId];
            return updated;
        });
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        decreaseCart,
        removeFromCart,

        // 🔥 REAL-TIME SEARCH
        searchTerm,
        setSearchTerm
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;