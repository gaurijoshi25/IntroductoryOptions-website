import React, { useState } from 'react';



const AddItem = ({title,data}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
    
    return ( 
    
        <div  className="border rounded mb-4 flex flex-col w-full justify-center">
            <div className="p-4 cursor-pointer w-full flex w-full justify-between font-brick" style={{ backgroundColor: '#001219' }} onClick={toggleAccordion}>
            <strong><h2 className="text-lg font-semibold font-link" style={{color: '#f2f2f2'}}>{title}</h2></strong>
            {isOpen && <span class="fa fa-chevron-up fa-xxs " style={{color: '#f2f2f2'}}></span>}
            {(!isOpen) && <span class="fa fa-chevron-down fa-xxs " style={{color: '#f2f2f2'}}></span>}
            </div>
            {isOpen && <div className='font-brick p-4'>
                <ol>
                    {data.map((item,index) =>(
                        <li key={index} style={{display:'flex'}}>{index + 1}.<div className='p-1'></div> {item.head}</li>
                    )
                    )}
                </ol>
            </div>}
        </div>
     );
}
 
export default AddItem;