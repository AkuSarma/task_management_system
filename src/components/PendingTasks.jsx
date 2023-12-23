import React from 'react'
import Task from './Task'
import AddTask from './AddTask'

const PendingTasks = ({ data, addTasks, completionStatusUpdate, deleteTask}) => {
  const showAddTask = () => {
    const addTask = document.getElementById("AddTask");
    addTask.classList.add("show");
  };
  return (
    <div className="PendingTasks">
      <div className="flex-wrapper">
        <h2>Pending tasks</h2>
        <div className="create" onClick={showAddTask}>
          Create Task<i className="fa-solid fa-plus"></i>
        </div>
      </div>
      <hr />
      <AddTask addTasks={addTasks} />
      {data.length > 0 ? (
        data.map((item) => (
          <Task
            key={item.id}
            data={item}
            completionStatusUpdate={completionStatusUpdate}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p className="center">No pending tasks</p>
      )}
    </div>
  );
};

export default PendingTasks