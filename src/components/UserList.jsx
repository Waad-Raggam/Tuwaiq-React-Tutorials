    import User from "./User";

    const UserList = () =>{
        const usersList = [
            {name: 'John', age: 30, dept:'CS', val:'0' },
            {name: 'Alice', age: 25, dept:'CS', val:'0'  },
            {name: 'Bob', age: 35, dept:'CS', val:'0'  }
        ]

        return(
            <>
            <User users={usersList}></User>
            </>
        )
    }

    export default UserList;