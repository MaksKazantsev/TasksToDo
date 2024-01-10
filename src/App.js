
import './App.css';
import {useMemo, useState} from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import {useTasks} from "./hooks/useTasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([
      {id:1, title:"Example", body:"This is an example"}
  ])
    // Creating and removing tasks

    const createTask = (newTask) => {
      setTasks([...tasks, newTask])
      setModal(false)
    }

    const removeTask = (task) => {
      setTasks(tasks.filter(t => t.id !== task.id))
    }

    // Sorting and searching tasks

    const [filter, setFilter] = useState({sort:"", query:""})
    const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query)


    // Modal window

    const [modal, setModal] = useState(false)

    //

    async function fetchTasks () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTasks(response.data)
    }

  return (
     <div>
         <MyButton onClick={fetchTasks}>Get Auto Tasks</MyButton>
         <MyButton style={{marginTop:"15px"}} onClick={() => setModal(true)}>Add new task</MyButton>
         <MyModal modal={modal} setModal={setModal}>
             <TaskForm create={createTask}/>
         </MyModal>
         <hr style={{margin: "15px"}}/>
         <TaskFilter filter={filter} setFilter={setFilter}/>
         <TaskList tasks={sortedAndSearchedTasks} remove={removeTask}/>
     </div>
  );
}

export default App;
