import React, { createContext, useState, useContext } from 'react';

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

    const [boolPopPhone, setBoolPopPhone] = useState(false);
    const [toastBool, setToastBool] = useState(false)
    const [phoneToastBool, setPhoneToastBool] = useState(false)
    const [boolPop, setBoolPop] = useState(false)
    const [profile, setProfile] = useState(false)
    const [authBool, setAuthBool] = useState(false)

    // Toggle function
    const toggleBoolPopPhone = () => {
        setBoolPopPhone(prevState => !prevState);
    };

    return (
        <BooleanContext.Provider value={{
            boolPopPhone,setBoolPopPhone,
            authBool,setAuthBool,
            boolPop,setBoolPop,
            profile,setProfile,
            toastBool,setToastBool,
            phoneToastBool,setPhoneToastBool,
            toggleBoolPopPhone,
            user,setUser,
            userType,setUserType
        }}>
            {/* <BooleanContext.Provider value={{ boolPopPhone, setBoolPopPhone, toggleBoolPopPhone }}> */}
            {children}
        </BooleanContext.Provider>
    );
};
