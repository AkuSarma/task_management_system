import React, { useState } from 'react'

const AddTask = ({ addTasks }) => {
 const [title, setTitle] = useState('')
 const [enddate, setEnddate] = useState('')
 const addTask = document.getElementById("AddTask");

 const handleSubmit = (e) => {
    e.preventDefault();
    addTasks(title, enddate);
    addTask.classList.remove("show");
    setTitle('');
    setEnddate('');
 }

 return (
   <div className="AddTask" id="AddTask">
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Enter the task"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         onSubmit={(e) => (e.target.value = "")}
       />
       <input
         type="date"
         name=""
         id=""
         placeholder="Enter deadline"
         value={enddate}
         onChange={(e) => setEnddate(e.target.value)}
         onSubmit={(e) => (e.target.value = "")}
       />
       <input type="submit" value="submit" />
     </form>
   </div>
 );
}

export default AddTask