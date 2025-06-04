import Employee from "./Employee"
import { UseUserContext } from "./UserContext"
const Employees=()=>{
    const {users} =UseUserContext();
    return(
        <div>
       { users.map (u=>{
        return (
            <Employee key={u.id} {...u}/>
        )
       } )}
        </div>)
       
    
}
export default Employees;