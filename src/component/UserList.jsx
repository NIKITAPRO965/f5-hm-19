// function UserList({data, onDelete}){
//     console.log(data);
    

//     return(
//     <ul>{data.map((user) => {
//         return(<li key={user.id}>
//                 <h2>{user.name}</h2>
//                 <h2>{user.age}</h2>
//                 <button onClick={()=>onDelete(user.id)} type="button">delete</button>
//             </li>)
            
//         })}
//     </ul>
    
//     )
// }

// export default UserList


import { UserContext } from "../UserContext"
import { useContext } from "react"
import UserItem from "./UserItem"

function UserList(){
    const {userList} = useContext(UserContext)

    return(
    <ul>{userList.map((user) => {
        
        return(<UserItem user={user} key={user.id}/>)
            
        })}</ul>
    )
}

export default UserList