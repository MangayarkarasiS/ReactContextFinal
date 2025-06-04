import { UseUserContext } from "./UserContext";
const Count=()=>{
    const {count}=UseUserContext();
    return(
        <h1>No.of Employees={count}</h1>
    )
}
export default Count;

//https://www.youtube.com/watch?v=g6tPdNLRU_E   website address for reference
