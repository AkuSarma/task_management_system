import React from 'react'
import Task from './Task'

const CompletedTasks = ({ data, completionStatusUpdate, deleteTask }) => {
  return (
    <div className="CompletedTasks">
      <h2>Completed Tasks</h2>
      <hr />
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
        <p className='center'>No Completed tasks</p>
      )}
    </div>
  );
};

export default CompletedTasks