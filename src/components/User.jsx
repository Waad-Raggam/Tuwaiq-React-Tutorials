import "./User"
const User = (props) =>{
    const users = props.users;
    const dept = props.dept;
    const val = props.val;
    const name = props.name;
    return(
        <>
       <ul  class="fa fa-align-center" aria-hidden="true">
            {users.map((user, index)=>(
                <li key={index}>
                    <span display='inline-block' >{user.name}</span> - {user.age} - {user.dept} - {user.val}
                </li>
            ))}
        </ul>
        </>
    )
}

export default User;