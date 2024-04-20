// src/App.js
import React from 'react';
import AccordionItem from './components/AccordionItem';
import 'tailwindcss/tailwind.css';
import Header from './components/header';
import AddItem from './components/AccordianAdditionalitem';
import Footer from './components/footer';
import './App.css'
import Notice from './components/notice';
import Navbar from './components/Navbar';

const scheduleData = [
  [
    { day: 'Day 1',
    overview: 'Introduction to options and it’s jargons 1',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=QfvJojTymqs&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=2" target="_blank" rel="noopener noreferrer" >
              Video: What are derivatives?
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.investopedia.com/terms/d/derivative.asp" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Introduction to derivatives
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=-mO0YOTcCiQ&t=397s" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Introduction to Options
          </a>
        </div>
        <div className='table-data'>
          <a href="https://www.icicidirect.com/ilearn/futures-and-options/courses/chapter-2-introduction-to-options" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Basics of options
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=54GRv6-18CA&t=1s" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Options Jargons
          </a>
        </div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=5hnyb78_sMc" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Arbitrage and Speculation
          </a>
        </div>
      </div>
    ) },

    { day: 'Day 2',
    overview: 'Introduction to call and put options',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=MiybniIIvx0" className='table-data' target="_blank" rel="noopener noreferrer">
              Video: Understanding Option Prices
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=M86YwBWxygI" className='table-data' target="_blank" rel="noopener noreferrer">
              Video: Option Trading
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=3L2gPXJqKqU&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=7" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Call option explained
          </a>
        </div>
        <div className='table-data'>
          <a href="https://www.investopedia.com/terms/c/calloption.asp#:~:text=Call%20options%20are%20financial%20contracts%20that%20give%20the%20option%20buyer,is%20called%20the%20underlying%20asset." className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Call option
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=dOBDmW8kPhk&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=8" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Put option explained
          </a>
        </div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=npjO-c4abBk" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: What are Put Options
          </a>
        </div>
        <div className='table-data'>
          <a href="https://www.investopedia.com/terms/p/putoption.asp" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Put Option
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 3',
    overview: 'Payoff for call options',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=kmQ20J_3K7Q" className='table-data' target="_blank" rel="noopener noreferrer">
              Video: Payoff for call option
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/buying-a-call-option/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Buying call option
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/sellingwriting-a-call-option/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Selling call option
          </a>
        </div>
      </div>
    )},

    { day: 'Day 4',
    overview: 'Payoff for put options, moneyness of option',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=FAwDrUqpGUI" className='table-data' target="_blank" rel="noopener noreferrer">
              Video: Payoff for put option.
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/the-put-option-buying/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Buying Put option
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/the-put-option-selling/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Selling Put option
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=tSl_M1I7ZQQ&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=10" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: ITM, ATM, OTM explained
          </a>
        </div>
        <div className='table-data'>
          <a href="https://youtu.be/U7W5ZCSyW2Y?feature=shared" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Intrinsic Value and time value. 
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/moneyness-of-an-option-contract/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Moneyness of option 
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 5',
    overview: 'Summarizing week 1',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=R8bsVwmVX40&list=PLu4JqTPBlGcNctJu1-LcH8OL-dG2DlYCb&index=14" className='table-data' target="_blank" rel="noopener noreferrer">
              Video: Options Buying v/s selling
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=pX15FfWrPR4" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Buying call vs selling put option
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=Ah9Kk6MCZ7o&list=PLX2SHiKfualFiusiT9G5uE9jU3vetvW2x&index=5" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Summary
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/summarizing-call-put-options/"className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Options Summary
          </a>
        </div>
      </div>
    ) }
  ],
  [//week2
    { day: 'Day 1',
    overview: 'Introduction to pricing models',

    task1: (
        <div>
          
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=8GQuGmoWbzc" target="_blank" rel="noopener noreferrer" >
              Video 1: Binomial option pricing model?
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=7hL_4J5VjRw" className='table-data' target="_blank" rel="noopener noreferrer">
              Video 2 (optional) 
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.investopedia.com/articles/investing/021215/examples-understand-binomial-option-pricing-model.asp" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Binomial model (optional Read)
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
          <div style={{textDecoration: 'none'}}></div>
          <div className='table-data'>
          
            <a href="https://www.youtube.com/watch?v=pr-u4LCFYEY" target="_blank" rel="noopener noreferrer" >
              Video 1: Black Scholes model
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=NHvQ5CSSgw0" className='table-data' target="_blank" rel="noopener noreferrer">
              Video 2 (optional)
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.investopedia.com/terms/b/blackscholes.asp" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Black Scholes model
            </a>
          </div>
        </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://pages.stern.nyu.edu/~adamodar/pdfiles/valn2ed/ch5.pdf" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Summary of pricing Models (Optional Read)
          </a>
        </div>
      </div>
    ) } ,
    { day: 'Day 2',
    overview: 'Option greeks- delta',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=xEoNbnFRIQk" target="_blank" rel="noopener noreferrer" >
              Video: Option greek- Delta
            </a>
          </div>
          <div className='table-data'>
            <a href="https://youtu.be/gZqzEF-Rlnw?feature=shared" className='table-data' target="_blank" rel="noopener noreferrer">
              Video: Option Delta Explained (Optional)
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/the-option-greeks-delta-part-1/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: The Options Greek (Delta) Part #1
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/delta-part-2/" className='table-data' target="_blank" rel="noopener noreferrer">
          Blog: The Options Greek (Delta) Part #2
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/delta-part-3/" className='table-data' target="_blank" rel="noopener noreferrer">
          Blog: The Options Greek (Delta) Part #3
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 3',
    overview: 'Option greeks- Gamma and Theta ',
    task1: (
        <div>
          <div className='table-data'>
            AKSHAYA
            
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/gamma-part-1/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog:The Options Greek (Gamma) Part #1
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/gamma-part-2/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: The Options Greek (Gamma) Part #2
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=fDLJlU8OdP8" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Option greek (Theta)
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/theta/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Theta
          </a>
        </div>
      </div>
    )},
    { day: 'Day 4',
    overview: 'Introduction to volatility',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.investopedia.com/terms/v/volatility.asp" target="_blank" rel="noopener noreferrer" >
              Blog: Volatility Basics Blog
            </a>
          </div>
          <div className='table-data'>
            <a href="https://www.investopedia.com/terms/i/iv.asp#:~:text=What%20Is%20Implied%20Volatility%20(IV,it%20to%20price%20options%20contracts." className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Implied Volatility Blog
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=kMxhjVXAgZo" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Implied Volatility, IV Rank, IV Percentile Explained
          </a>
        </div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=H-NHZq-skFo" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Implied Volatality (Optional)
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/volatility-normal-distribution/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Volatality and Normal distribution
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/volatility-applications/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Applications of Volatality
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 5',
    overview: 'Option greek- Vega ',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=Yoxz3lVq248" target="_blank" rel="noopener noreferrer" >
              Video: Options Greek (Vega)
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/vega/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Options Greek (Vega) 
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=ReodIpHoKbY" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Options Greek (Rho)
          </a>
        </div>
      </div>
    )}
  ],
  [ //WEEK3
    { day: 'Day 1',
    overview: 'Bullish and neutral trading strategies using spreads',

    task1: (
        <div>
          
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=aiLOf45fQco" target="_blank" rel="noopener noreferrer" >
              Video: Bull Call Spread
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/bull-call-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Bull Call Spread
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
          <div style={{textDecoration: 'none'}}></div>
          <div className='table-data'>
          
            <a href="https://www.youtube.com/watch?v=K09cWfaMKHY" target="_blank" rel="noopener noreferrer" >
              Video: Bull Put Spread
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/bull-put-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Bull Put Spread
            </a>
          </div>
        </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=IoiUt9C_I7U" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Butterfly Spread
          </a>
        </div>
        <div className='table-data'>
          <a href="https://upstox.com/market-talk/butterfly-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Butterfly Spread
          </a>
        </div>
      </div>
    ) } ,
    { day: 'Day 2',
    overview: 'Bearish trading strategies using spreads',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=EAXH01Zkqf4" target="_blank" rel="noopener noreferrer" >
              Video: Bear Put Spread
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/bear-put-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Bear Put Spread Blog
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=OOq5PAy6Ccg" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Bear Call Spread
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/bear-call-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
          Blog: Bear Call Spread
          </a>
        </div>
      </div>
    ),
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/bear-call-ladder/" className='table-data' target="_blank" rel="noopener noreferrer">
          Blog: Bear Call Ladder
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 3',
    overview: 'Call ratio and put ratio back spread ',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=1jmdR4BF46A" target="_blank" rel="noopener noreferrer" >
              Video: Call Ratio Back Spread
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/call-ratio-back-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Call Ratio Back Spread
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/put-ratio-back-spread/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Put Ratio Back Spread
          </a>
        </div>
      </div>
    )},
    { day: 'Day 4',
    overview: 'Trading strategies using combinations',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=VJAUd6wrXUk&list=PLfbHmXdG-214sJCZQI-Ehw7-YbGzBBjz9&index=3" target="_blank" rel="noopener noreferrer" >
              Video: Long Straddle
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/the-long-straddle/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Long Straddle
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=kTQancDLy-Y" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Short Straddle
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/the-short-straddle/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Short Straddle 
          </a>
        </div>
      </div>
    ), 
    task3:  (
      <div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/the-long-short-strangle/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Long and Short Straddle
          </a>
        </div>
      </div>
    ) },
    { day: 'Day 5',
    overview: 'Max pain theory and iron condor',
    task1: (
        <div>
          <div className='table-data'>
            <a href="https://www.youtube.com/watch?v=YMqo3uJ6YgM" target="_blank" rel="noopener noreferrer" >
              Video: Max Pain Theory
            </a>
          </div>
          <div className='table-data'>
            <a href="https://zerodha.com/varsity/chapter/max-pain-pcr-ratio/" className='table-data' target="_blank" rel="noopener noreferrer">
              Blog: Max Pain Theory and PCR ratio
            </a>
          </div>
        </div>
      ),
    task2:  (
      <div>
        <div className='table-data'>
          <a href="https://www.youtube.com/watch?v=W-MG-yqSe30" className='table-data' target="_blank" rel="noopener noreferrer">
            Video: Iron Condor Strategy
          </a>
        </div>
        <div className='table-data'>
          <a href="https://zerodha.com/varsity/chapter/iron-condor/" className='table-data' target="_blank" rel="noopener noreferrer">
            Blog: Iron Condor Strategy
          </a>
        </div>
      </div>
    )}
  ]

  // Add more weeks as needed
];

const AddData = [
  [ {head: (
  <div className='table-data'>
    <a href="https://drive.google.com/file/d/1ZhN5sy41tEt2iJJ3IdNbvP2CVup1vNp6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
    J.C. HULL Derivatives(Chapter 10 to 15)
    </a>
  </div>)},
  {head:(
    <div className='table-data'>
      <a href="https://akunacapital.teachable.com/" target="_blank" rel="noopener noreferrer">
      Akuna options 101
      </a>
    </div>) },
    {head:(
      <div className='table-data'>
        <a href="https://drive.google.com/file/d/1ZTcvBHq6ih1RYfIrfYqOaqBeMpyApUvf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Paul Wilmott(Quantitative finance)
        </a>
      </div>) }

  ],
  [{head: (
    <div className='flex table-data'>
      <a href="https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7" target="_blank" rel="noopener noreferrer">
        Video: Basics of Python (1 to 9)
      </a>
    </div>)},
    {head: (
      <div className='table-data'>
        <a href="https://www.youtube.com/watch?v=QUT1VHiLmmI&t=2487s&ab_channel=freeCodeCamp.org" target="_blank" rel="noopener noreferrer">
          Video: Numpy Basics (till 48 mins)
        </a>
      </div>)},
      {head: (
        <div className='table-data'>
          <a href="https://www.youtube.com/playlist?list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y" target="_blank" rel="noopener noreferrer">
            Video: Pandas Basics (1 to 20)
          </a>
        </div>)}

  ],
  [
    {head:(
      <div className='flex table-data'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJIGq4YPL1l8EJIp9zcX7lUG7_Z2zAPttuWJ6Rp2PGRNaYYA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
          Week 1 Quiz
        </a>
      </div>)},
      {head:(
        <div className='flex flex-col table-data'>
          <div>
          <a href="https://colab.research.google.com/drive/1T9DGUlFeLxQBjQgL1d7yvqYkypZvrefU?usp=sharing" target="_blank" rel="noopener noreferrer">
            Week 1 Coding Assignment
          </a>
          </div>
          <div>
          <ol>
            <li>
              <a href="https://forms.gle/LtbcKTWyDXoVN7Kr7" target="_blank" rel="noopener noreferrer">
              Submission Link
              </a>
            </li>
          </ol>
          </div>
          
        </div>)},
        {head:(
          <div className='flex table-data'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3W3corkAZE3WXGur6MpfLXLtglWUYOTKtG-chg991ddKgsQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              Week 2 Quiz
            </a>
          </div>)},
          {head:(
            <div className='flex flex-col table-data'>
              <div>
              <a href="https://colab.research.google.com/drive/1qGJ9AqiTkZUurw89SYcSYXkrPDomlfej?usp=sharing" target="_blank" rel="noopener noreferrer">
                Week 2 Coding Assignment
              </a>
              </div>
              <div>
              <ol>
                <li>
                  <a href="https://forms.gle/LsDUA3z8cGBRBjLTA" target="_blank" rel="noopener noreferrer">
                  Submission Link
                  </a>
                </li>
              </ol>
              </div>
              
            </div>)},
            {head:(
              <div className='flex table-data'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn2TQkGr8glMQSRQVLdItdAvSXFOloSulbGidFiciiQm7_tA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                  Week 3 Quiz
                </a>
              </div>)},
              {title:(
                <h1>CODING ASSIGNMENTS:</h1>
              ),head:(
                <div className='flex flex-col table-data'>
                  
              <div>
                
                <a href="https://colab.research.google.com/drive/1eQ5x-ox1-DI4ND_ReT1jxCFtecAMVmvK?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Option 1 - Implementation of Black Scholes Model
                </a>
              </div>
              <div>
                
                <a href="https://github.com/finnecoiitg/Options-Course-Final-Assignment" target="_blank" rel="noopener noreferrer">
                  Option 2 - Hedging with Bull Call Spread
                </a>
              </div>
              <div>
                
                <a href="https://github.com/finnecoiitg/Options-Course-Final-Assignment" target="_blank" rel="noopener noreferrer">
                  Option 3 - Hedging with Short Strangle
                </a>
              </div>
              <div>
              <ol>
                <li>
                  <a href="https://forms.gle/rQURnYuBQm8KRUx56" target="_blank" rel="noopener noreferrer">
                  SUBMISSION LINK
                  </a>
                </li>
              </ol>
              </div>
              
            </div>
              )}
  ]

]




const App = () => {    
    return (
      <div className="min-h-screen bg-gray-100 p-0 m-0">
        <div className="min-h-screen bg-gray-100 p-8">
          <Navbar></Navbar>
        <Header /> {/* Use the Header component */}
        <Notice />
        {scheduleData.map((weekData, index) => (
          <div key={index}>  
            <AccordionItem title={`Week ${index + 1}`} data={weekData} /> 
          </div>
        ))}
        <div>
          <AddItem title={'Additional Resources'} data={AddData[0]} />
          <AddItem title={'Python Resources'} data={AddData[1]} />
          <AddItem title={'Graded Quiz & Coding Assignments'} data={AddData[2]} />
        </div>
        </div>
        
        <Footer />
      </div>
    );
};

export default App;
