import { createContext } from "react";

export const DetailsContext = createContext(
    {
        name: "",
        email: ""
    }
)