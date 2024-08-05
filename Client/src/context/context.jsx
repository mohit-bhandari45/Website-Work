import React, { createContext, useState, useContext } from 'react';
import { getFavorites } from '../apis/apis';

// Create the context
const BooleanContext = createContext();

// Create a custom hook to use the BooleanContext
export const useBooleanContext = () => {
    return useContext(BooleanContext);
};

// Create the provider component
export const BooleanProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    const [userType, setUserType] = useState(undefined)
    const [token, setToken] = useState("")

    const [boolPopPhone, setBoolPopPhone] = useState(false);
    const [toastBool, setToastBool] = useState(false)
    const [phoneToastBool, setPhoneToastBool] = useState(false)
    const [boolPop, setBoolPop] = useState(false)
    const [authBool, setAuthBool] = useState(false)
    const [wishList, setWishList] = useState(null)

    // Toggle function
    const toggleBoolPopPhone = () => {
        setBoolPopPhone(prevState => !prevState);
    }

    return (
        <BooleanContext.Provider value={{
            boolPopPhone, setBoolPopPhone,
            authBool, setAuthBool,
            boolPop, setBoolPop,
            toastBool, setToastBool,
            phoneToastBool, setPhoneToastBool,
            toggleBoolPopPhone,
            user, setUser,
            userType, setUserType,
            token, setToken,
            wishList,setWishList
        }}>
            {/* <BooleanContext.Provider value={{ boolPopPhone, setBoolPopPhone, toggleBoolPopPhone }}> */}
            {children}
        </BooleanContext.Provider>
    );
};
