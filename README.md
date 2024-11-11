# Task Manager
Task Manager is a simple and efficient web application designed to help users organize and manage their tasks effectively. Built with React, it saves data to the browser's local storage, ensuring that task data persists even after refreshing the page or closing the browser.

## Features
- Add, Edit, and Delete Tasks: Easily create new tasks, edit existing ones, or delete tasks as needed.
- Mark as Complete: Track progress by marking tasks as completed.
- Persistent Storage: Saves tasks to the browser's local storage, ensuring data remains accessible between sessions.
- Responsive Design: Adapts to different screen sizes for use on desktops, tablets, and mobile devices.

## Tech Stack
- React - Component-based JavaScript library for building a responsive user interface.
- Local Storage - Built-in browser storage used to persist task data.

## Installation
Clone the repository

```bash
git clone https://github.com/AkuSarma/task_management_system/
cd task_management_system
```
> Install dependencies

```bash
npm install
```

> Start the React development server

```bash
npm start
```
> Access the application
> - Open http://localhost:3000 in your browser to use the task manager.

Usage
- Add a Task
  - Enter a task title and description in the input fields, then click the "Add Task" button to save it.

- Edit or Delete a Task
  - Click on a task to edit it, or use the delete button to remove it from the list.

- Mark a Task as Complete
  - Use the checkbox or complete button to mark a task as completed.

- Data Persistence
  - All tasks are automatically saved to local storage, allowing them to persist even if you close or refresh the browser.

## Contributing
Contributions are welcome! If you'd like to make improvements or add new features:
- Fork the repository
- Create a new branch (git checkout -b feature/YourFeature)
- Commit your changes (git commit -m 'Add new feature')
- Push to the branch (git push origin feature/YourFeature)
- Open a pull request
