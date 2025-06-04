import { createContext, useContext } from "react";
import { UserContext } from "../UserProvider";

export const userContext=createContext(null);

export const UserContextProvider =({children})=>{
    const users= [
       { id:1, name:"Koki", role:"dev"},
       { id:2, name:"Jazzy", role:"dev"},
       { id:3, name:"Josh",  role:"manager"}
    ];
const title="Employee Details";
var count=users.length;
return(
    <userContext.Provider value={{title,users,count}}>
        {children}
    </userContext.Provider>

)}
export const UseUserContext=()=>{
    const {title,users,count}=useContext(userContext);
    return {title,users,count};
}