import React, { useState, useEffect } from 'react';
import './App.css';
import CompletedTasks from './components/CompletedTasks';
import PendingTasks from './components/PendingTasks';
import Footer from './components/Footer';

function App() {
 let date = new Date();
 const [tasks, setTasks] = useState( JSON.parse(window.localStorage.getItem('tasks')) || [] );

//  useEffect(() => {
//     const storedTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//  }, []);

useEffect(() => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

  const addTasks = (title, endDate) => {
    let task = {
      id: date.getTime(),
      title: title,
      addedDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      endDate: endDate,
      isCompleted: false
    }
    setTasks([...tasks, task]);
    
    // window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const completionStatusUpdate = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
    // window.localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

 return (
   <div className="App">
     <h2 className="title">Task manager</h2>
     <div className="flex-wrapper">
       <PendingTasks
         data={tasks.filter((item) => !item.isCompleted)}
         addTasks={addTasks}
         completionStatusUpdate={completionStatusUpdate}
         deleteTask={deleteTask}
       />
       <CompletedTasks
         data={tasks.filter((item) => item.isCompleted)}
         completionStatusUpdate={completionStatusUpdate}
         deleteTask={deleteTask}
       />
     </div>
     <Footer />
   </div>
 );
}

export default App;