import { UserContext } from "../UserContext"
import { useContext } from "react"


function UserItem({user}) {
    
const {deleteHandle} = useContext(UserContext)

  return (
    <li>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick={() => deleteHandle(user.id)} type="button">
        delete
      </button>
    </li>
  );
}

export default UserItem;
