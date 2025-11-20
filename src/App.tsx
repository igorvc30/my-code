import { useEffect, useState } from 'react'

import './App.css'

type Task = {
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks ] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = () => {
    const data = {title: input};

  }

const onInputChange = (event) => {
 const text = event.target.value;
 setInput(text);
}

const getTasks = async ()=> {
  try {
    const response = await fetch("http://localhost:3000/tasks");
  const data = await response.json();
  setTasks(data);
  } catch (error) {
    console.log("error ", error)
  }
  
}

useEffect(()=> {
  getTasks().then();
},[getTasks])

const renderListItem = (item: Task)=>(<p key={item.title} style={item.completed?{textDecoration:"line-through" }:{}}>{item.title}</p>)
  
  return (
   <div>
      <h1>Todo list</h1>
      <div>
        <input value={input} onChange={onInputChange}/>
        <button onClick={handleInput}>Add</button>
      </div>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
      {tasks.map(renderListItem)}
   </div>
  )
}

export default App
