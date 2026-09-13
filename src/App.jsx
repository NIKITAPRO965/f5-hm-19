import { useState } from 'react';
import './App.css'
import UserList from './component/UserList';

// function App() {
//   const initialUserList = [
//   {
//     id: 1,
//     name: "Юрій",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "Олена",
//     age: 22,
//   },
//   {
//     id: 3,
//     name: "Андрій",
//     age: 30,
//   },
// ];

// const [userList, setUsetList] = useState(initialUserList)

// const deleteHandle = (userId) => {
//   setUsetList((prev)=> prev.filter(user => user.id !== userId))
// }

//   return (
//     <>
//     <UserList data={userList} onDelete={deleteHandle}/>
//     </>
//   )
// }

// export default App


function App() {




  return (
    <>
  <UserList />
    </>
  )
}

export default App