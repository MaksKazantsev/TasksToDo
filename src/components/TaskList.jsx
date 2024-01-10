import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({tasks, remove}) => {
    if(!tasks.length) {
        return (
            <h1 style={{textAlign:"center"}}>No tasks</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Your tasks for today</h1>
            {tasks.map((task, index) =>
                <TaskItem task={task} number={index + 1} key={task.id} remove={remove}/>
            )}
        </div>
    );
};

export default TaskList;