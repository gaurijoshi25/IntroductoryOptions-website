import React, { useState } from 'react';
// Import your existing component styles

const YourComponent = ({ scheduleData }) => {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <div className="your-component-container">
      <label className="toggle-button">
        <input
          type="checkbox"
          checked={showTasks}
          onChange={() => setShowTasks(!showTasks)}
        />
        Show Tasks
      </label>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Overview</th>
            {showTasks && <th>Task 1</th>}
            {showTasks && <th>Task 2</th>}
            {showTasks && <th>Task 3</th>}
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.day}</td>
              <td>{rowData.overview}</td>
              {showTasks && <td>{rowData.task1}</td>}
              {showTasks && <td>{rowData.task2}</td>}
              {showTasks && <td>{rowData.task3}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
