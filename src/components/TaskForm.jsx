import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const TaskForm = ({create}) => {
    const [task, setTask] = useState({title:'', body:''})
    const addNewPost = e => {
        e.preventDefault()
        const newTask = {
            id: Date.now(),
            ...task
        }
        {task.body && task.title !== '' ? create(newTask) : alert("You have to write something!")}
        setTask({title:'', body:''})
    }
    return (
        <form>
            <MyInput type="text" placeholder="Enter your title" value={task.title}
                   onChange={e => setTask({...task, title: e.target.value})}/>
            <MyInput type="text" placeholder="Enter your decsription" value={task.body}
                   onChange={e => setTask({...task, body: e.target.value})}/>
            <MyButton onClick={addNewPost}>Add new Task</MyButton>
        </form>
    );
};

export default TaskForm;