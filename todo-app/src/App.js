import { useEffect, useState } from "react";
const API_BASE= 'http://localhost:3001/to-do-app';


function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);


  const GetTodos = async () => {
    try {
      const response = await fetch(API_BASE);
      if (!response.ok) {
        throw new Error("Failed to fetch data from the server");
      }
      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  /*function addItem(){
   setItems((item)=> {
    return [...item, input]
   })
  }*/

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text' value={input}></input>
        <button>
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
