import { useState } from "react";

function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");


  function addItem(){
   setItems((item)=> {
    return [...item, input]
   })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input onChange={(e)=> setInput(e.target.value)} type='text' value={input}></input>
        <button onClick={addItem}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>
         
        </ul>
      </div>
    </div>
  
   
  );
}

export default App;
