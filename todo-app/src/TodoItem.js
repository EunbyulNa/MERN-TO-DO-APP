import React, {useState} from "react";
const API_BASE= 'http://localhost:3001/to-do-app';

function TodoItem(props){
    const {name, id, completed, setItems} = props
   
      const deleteTodo = async(id) => {
        try{
            const response = await fetch(API_BASE + "/delete/" + id, {
                method: "DELETE",
              });
            if(!response.ok){
                throw new Error("Faild to delete a task")
            } 
            const data = await response.json()
            setItems(items=> items.filter(item=> item._id !== data._id))
        }catch (error) {
            console.error("Error updating task status:", error);
          }
      }

    return(
     <div className={"todo" + (completed ? " check-complete" : "")} key={id}>
        <div className="checkbox"></div>
        <div className="text">{name}</div>
        <div className="delete-todo" onClick={()=>deleteTodo(id)}><span >X</span></div>
      </div>
    )
}

export default TodoItem;