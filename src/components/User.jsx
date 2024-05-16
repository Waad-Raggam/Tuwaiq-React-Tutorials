import "./User"
const User = (props) =>{
    const users = props.users;
    return(
        <>
       <ul  class="fa fa-align-center" aria-hidden="true">
            {users.map((user, index)=>(
                <li key={index}>
                    <span display='inline-block' >{user.name}</span> - {user.age}
                </li>
            ))}
        </ul>
        </>
    )
}

export default User;