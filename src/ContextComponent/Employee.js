const Employee=(props)=>{
    const{id,name,role}=props;
    console.log(props);

    return(
        <div>
            <div key={id} className="border">
                <h2>Id: {id}</h2>
                <h2>Name: {name}</h2>
                <h2>Role: {role}</h2>
            </div>
        </div>
    )
}
export default Employee;