// src/components/AccordionItem.js
import React, { useState } from 'react';
import Table from './table';

const AccordionItem = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded mb-4 flex flex-col w-full justify-center">
      <div className="p-4 cursor-pointer w-full flex flex-col w-full justify-center font-brick" style={{ backgroundColor: '#001219' }} onClick={toggleAccordion}>
        <strong><h2 className="text-lg font-semibold" style={{color: '#f2f2f2'}}>{title}</h2></strong>
      </div>
      {isOpen && <div className="p-4 font-brick"><Table data={data} /></div>}
    </div> 

  );
};

export default AccordionItem;
