import React from "react";

const Task = ({ data, completionStatusUpdate, deleteTask }) => {
  return (
    <div className="Task" key={data.id}>
      <div className="flex-wrapper">
        <div className="details">
          <h3>{data.title}</h3>
          <p>
            <b>Added Date: </b>
            {data.addedDate}
          </p>
          <p>
            <b>End Date: </b>
            {data.endDate}
            <br />
          </p>
        </div>
        <div className="buttons">
          <div className="flex-wrapper">
            {/* <i className="fa-solid fa-pen-to-square"></i> */}
            <i className="fa-solid fa-trash" onClick={() => {deleteTask(data.id)}}></i>
          </div>
          {!data.isCompleted ? (
            <h4
              onClick={() => {
                completionStatusUpdate(data.id);
              }}
            >
              Completed <i className="fa-solid fa-check"></i>
            </h4>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Task;
