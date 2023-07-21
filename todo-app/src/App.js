import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
const API_BASE= 'http://localhost:3001/to-do-app';


function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    GetTodos();
  }, []);

  const handleChange = (e) => {
     setInput(e.target.value)
  }

 const GetTodos = () => {
  fetch(API_BASE)
  .then(res => res.json())
  .then(data => setItems(data))
  .catch(err => console.log(err))
 }

  const addItem = async() => {
   const data = await fetch(API_BASE + "/new", {
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({
      name: input,
      completed: false
    })
   }).then(res => res.json()) 
   console.log(data)
   await GetTodos()
   setInput('')
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text' value={input} onChange={handleChange}></input>
        <button onClick={()=>addItem()}>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">  
      {items.map((item)=> {
        const {_id, name, completed} = item
        return  <TodoItem name={name} id={_id} completed={completed} setItems={setItems}/>   
      })}
     
      </div>
    </div>
  
   
  );
}

export default App;
