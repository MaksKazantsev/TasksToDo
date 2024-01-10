import React from 'react';
import MyButton from "../UI/button/MyButton";

const TaskItem = (props) => {
    return (
        <div className="App">
            <div className="task">
                <div className="task_content">
                    <strong>{props.number}. {props.task.title}</strong>
                    <div>
                        <p>{props.task.body}</p>
                    </div>
                </div>
                <div className="btn">
                    <MyButton onClick={() => props.remove(props.task)}>Delete Task</MyButton>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;