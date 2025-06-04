import { UseUserContext } from "./UserContext";
const Header=()=>{
    const {title} =UseUserContext();
    return(
        <h1>{title}</h1>
    )

}
export default Header;