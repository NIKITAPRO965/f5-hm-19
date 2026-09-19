import { useState, useMemo, useCallback } from "react";
import "./App.css";
// import UserList from './component/UserList';
import Buttons from "./component/Buttons";

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

// function App() {

//   return (
//     <>
//   <UserList />
//     </>
//   )
// }

// export default App

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  // const result = number*100
  // console.log(result, "обчислююємо резалт");

  const result = useMemo(() => {
    console.log("обчислююємо резалт");
    return number * 100;
  }, [number]);

  // const handleClick = () => {
  //   console.log("component кнопка натиснута");
    
  // }

  const handleClick = useCallback(()=>{
    console.log("component кнопка натиснута");
  }, [])

  return (
    <>
      <h1>{result}</h1>
      <button onClick={() => setNumber(number + 1)} type="button">
        Збільшити
      </button>
      <input
        value={name}
        onChange={(evt) => setName(evt.target.value)}
        type="text"
      />
      <h2>{name}</h2>


      <Buttons onClick={handleClick}/>
    </>
  );
}

export default App;
