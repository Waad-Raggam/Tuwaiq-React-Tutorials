    import User from "./User";

    const UserList = () =>{
        const usersList = [
            {name: 'John', age: 30 },
            {name: 'Alice', age: 25 },
            {name: 'Bob', age: 35 }
        ]

        return(
            <>
            <User users={usersList}></User>
            </>
        )
    }

    export default UserList;