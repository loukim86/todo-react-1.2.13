import React from 'react';
import Task from "../Task/Task";
import './TaskList.css';

const TaskList = ({ taskData }) => {
  const taskTodo = taskData.map((item) => {
    const {id, state, ...itemProps} = item;
    return (
        <li key={item.id} className={item.state}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label><Task taskItem={itemProps}/></label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {item.state === 'editing' ? <input type="text" className="edit" defaultValue="Editing task"/> : null}
        </li>
    );
});

return (
    <ul className="todo-list">
        {taskTodo}
    </ul>
);
}

export default TaskList;

