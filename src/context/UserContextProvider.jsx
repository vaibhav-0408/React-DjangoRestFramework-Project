import React, { useRef, useState } from "react";
import UserContext from "./UserContext";
import Menu from "../pages/Menu";

const UserContextProvider=({children})=>{
    const[food,setdata]=useState([])
    return(
        <UserContext.Provider value={{food,setdata}}>
        {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider;