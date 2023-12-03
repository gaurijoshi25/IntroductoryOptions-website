// src/components/Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="w-full border-collapse font-brick">
      <thead>
        <tr>
          <th>Day</th>
          <th>Brief Overview <i className="fa-solid fa-chevron-down" style={{color: 'white'}}></i></th>
          <th>Task 1</th>
          <th>Task 2</th>
          <th>Task 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className='border-b-2 border-gray-400'>
            <td>{item.day}</td>
            <td>{item.overview}</td>
            <td>{item.task1}</td>
            <td>{item.task2}</td>
            <td>{item.task3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
