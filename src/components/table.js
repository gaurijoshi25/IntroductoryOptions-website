// src/components/Table.js
import React from 'react';
import './table.css'

const Table = ({ data }) => {
  return (
  <div className='table-container'>
    <table className="w-full border-collapse font-brick">
      <thead>
        <tr>
        <th><div className="day">
            Day
          </div></th>
          <th><div className='overview'>
           Brief Overview 
          </div></th>
          <th><div className='task'>Task 1</div></th>
          <th><div className='task'>Task 2</div></th>
          <th><div className='task'>Task 3</div></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className='border-b-2 border-gray-400'>
            <td><div className="day" style={{paddingBottom:'10px', paddingTop:'10px'}}>{item.day}</div></td>
            <td><div className='overview' style={{paddingBottom:'10px', paddingTop:'10px', paddingLeft:'10px'}}>{item.overview}</div></td>
            <td><div style={{paddingBottom:'10px', paddingTop:'10px'}}>{item.task1}</div></td>
            <td><div style={{paddingBottom:'10px', paddingTop:'10px'}}>{item.task2}</div></td>
            <td><div style={{paddingBottom:'10px', paddingTop:'10px'}}>{item.task3}</div></td>
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
    
  );
};

export default Table;
