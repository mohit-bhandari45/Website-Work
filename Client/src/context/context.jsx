import React, { createContext, useState, useContext } from 'react';

// Create the context
const BooleanContext = createContext();

// Create a custom hook to use the BooleanContext
export const useBooleanContext = () => {
    return useContext(BooleanContext);
};

// Create the provider component
export const BooleanProvider = ({ children }) => {
    const [boolPopPhone, setBoolPopPhone] = useState(false);
    const [toastBool, setToastBool] = useState(false)
    const [phoneToastBool, setPhoneToastBool] = useState(false)

    // Toggle function
    const toggleBoolPopPhone = () => {
        setBoolPopPhone(prevState => !prevState);
    };

    return (
        // <BooleanContext.Provider value={{ boolPopPhone, toastBool, setToastBool, phoneToastBool, setPhoneToastBool, setBoolPopPhone, toggleBoolPopPhone }}>
        <BooleanContext.Provider value={{ boolPopPhone, setBoolPopPhone, toggleBoolPopPhone }}>
            {children}
        </BooleanContext.Provider>
    );
};
