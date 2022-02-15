import React, { useState, useEffect } from 'react'
import { listenEvent } from "@gt/utils";

const App = ({ name }) => {
  const [tasks, updateTask] = useState([])

  useEffect(() => {
    listenEvent('@gt/react-route/todo/add-task', event => {
      updateTask(oldTasks => [
        ...oldTasks,
        event.detail
      ])
    })
  }, [])

  return (
    <>
      <h1>@gt/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App