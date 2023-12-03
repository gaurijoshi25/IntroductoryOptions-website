// src/App.js
import React from 'react';
import AccordionItem from './components/AccordionItem';
import 'tailwindcss/tailwind.css';
import Header from './components/header';


const scheduleData = [
  [
    { day: 'Day 1',
    overview: 'Introduction to options and it’s jargons 1',
    task1: (
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=QfvJojTymqs&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=2" target="_blank" rel="noopener noreferrer">
              Video: What are derivatives?
            </a>
          </div>
          <div>
            <a href="https://www.investopedia.com/terms/d/derivative.asp" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=-mO0YOTcCiQ&t=397s" target="_blank" rel="noopener noreferrer">
            Video: Introduction to Options
          </a>
        </div>
        <div>
          <a href="https://www.icicidirect.com/ilearn/futures-and-options/courses/chapter-2-introduction-to-options" target="_blank" rel="noopener noreferrer">
            Blog: Basics of options
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=54GRv6-18CA&t=1s" target="_blank" rel="noopener noreferrer">
            Video: Options Jargons
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=5hnyb78_sMc" target="_blank" rel="noopener noreferrer">
            Video: Arbitrage and Speculation
          </a>
        </div>
      </div>
    ) },

    { day: 'Day 2',
    overview: 'Introduction to call and put options',
    task1: (
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=MiybniIIvx0" target="_blank" rel="noopener noreferrer">
              Video: Understanding Option Prices
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=M86YwBWxygI" target="_blank" rel="noopener noreferrer">
              Video: Option Trading
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=3L2gPXJqKqU&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=7" target="_blank" rel="noopener noreferrer">
            Video: Call option explained
          </a>
        </div>
        <div>
          <a href="https://www.investopedia.com/terms/c/calloption.asp#:~:text=Call%20options%20are%20financial%20contracts%20that%20give%20the%20option%20buyer,is%20called%20the%20underlying%20asset." target="_blank" rel="noopener noreferrer">
            Blog: Call option
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=dOBDmW8kPhk&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=8" target="_blank" rel="noopener noreferrer">
            Video: Put option explained
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=dOBDmW8kPhk&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=8" target="_blank" rel="noopener noreferrer">
            Video: What are Put Options
          </a>
        </div>
        <div>
          <a href="https://www.investopedia.com/terms/p/putoption.asp" target="_blank" rel="noopener noreferrer">
            Blog: Put Option
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 3',
    overview: 'Payoff for call options',
    task1: (
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=kmQ20J_3K7Q" target="_blank" rel="noopener noreferrer">
              Video: Payoff for call option
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div>
          <a href="https://zerodha.com/varsity/chapter/buying-a-call-option/" target="_blank" rel="noopener noreferrer">
            Blog: Buying call option
          </a>
        </div>
        <div>
          <a href="https://zerodha.com/varsity/chapter/sellingwriting-a-call-option/" target="_blank" rel="noopener noreferrer">
            Blog: Selling call option
          </a>
        </div>
      </div>
    )},

    { day: 'Day 4',
    overview: 'Payoff for put options, moneyness of option',
    task1: (
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=FAwDrUqpGUI" target="_blank" rel="noopener noreferrer">
              Video: Put Options explained.
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div>
          <a href="https://zerodha.com/varsity/chapter/the-put-option-buying/" target="_blank" rel="noopener noreferrer">
            Blog: Buying Put option
          </a>
        </div>
        <div>
          <a href="https://zerodha.com/varsity/chapter/the-put-option-selling/" target="_blank" rel="noopener noreferrer">
            Blog: Selling Put option
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=tSl_M1I7ZQQ&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=10" target="_blank" rel="noopener noreferrer">
            Video: ITM, ATM, OTM explained
          </a>
        </div>
        <div>
          <a href="https://youtu.be/U7W5ZCSyW2Y?feature=shared" target="_blank" rel="noopener noreferrer">
            Video: Intrinsic Value and time value. 
          </a>
        </div>
        <div>
          <a href="https://zerodha.com/varsity/chapter/moneyness-of-an-option-contract/" target="_blank" rel="noopener noreferrer">
            Blog: Moneyness of option 
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 5',
    overview: 'Summarizing week 1',
    task1: (
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=R8bsVwmVX40&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=14" target="_blank" rel="noopener noreferrer">
              Video: Options Buying v/s selling
            </a>
          </div>
          <div>
            <a href="https://www.investopedia.com/terms/d/derivative.asp" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=pX15FfWrPR4" target="_blank" rel="noopener noreferrer">
            Video: Buying call vs selling put option
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=Ah9Kk6MCZ7o&list=PLX2SHiKfualFiusiT9G5uE9jU3vetvW2x&index=5" target="_blank" rel="noopener noreferrer">
            Video: Summarizing options
          </a>
        </div>
        <div>
          <a href="https://zerodha.com/varsity/chapter/summarizing-call-put-options/" target="_blank" rel="noopener noreferrer">
            Blog: Options Summary
          </a>
        </div>
      </div>
    ) }
  ],
  [
    // { day: 'Day 1', overview: 'Overview 1.0', task1: 'Task 1A', task2: 'Task 2A', task3: 'Task 3A' },
    // { day: 'Day 2', overview: 'Overview 2.0', task1: 'Task 1B', task2: 'Task 2B', task3: 'Task 3B' },
    // { day: 'Day 3', overview: 'Overview 3.0', task1: 'Task 1C', task2: 'Task 2C', task3: 'Task 3C' },
    // { day: 'Day 4', overview: 'Overview 1', task1: 'Task 1A', task2: 'Task 2A', task3: 'Task 3A' },
    // { day: 'Day 5', overview: 'Overview 2', task1: 'Task 1B', task2: 'Task 2B', task3: 'Task 3B' }
  ],
  [
    // { day: 'Day 1', overview: 'Overview 1', task1: 'Task 1A', task2: 'Task 2A', task3: 'Task 3A' },
    // { day: 'Day 2', overview: 'Overview 2', task1: 'Task 1B', task2: 'Task 2B', task3: 'Task 3B' },
    // { day: 'Day 3', overview: 'Overview 3', task1: 'Task 1C', task2: 'Task 2C', task3: 'Task 3C' },
    // { day: 'Day 4', overview: 'Overview 1', task1: 'Task 1A', task2: 'Task 2A', task3: 'Task 3A' },
    // { day: 'Day 5', overview: 'Overview 2', task1: 'Task 1B', task2: 'Task 2B', task3: 'Task 3B' }
  ]
  // Add more weeks as needed
];

const App = () => {    
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <Header /> {/* Use the Header component */}
        {scheduleData.map((weekData, index) => (
      <div key={index}>
        
        <AccordionItem title={`Week ${index + 1}`} data={weekData} />
        
        <hr></hr>
      </div>
      
    ))}
      </div>
    );
};

export default App;
