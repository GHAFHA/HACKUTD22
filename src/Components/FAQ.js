import React, {useState}  from 'react';
import "./FAQ.css";

const data =
[
  {
    Question: 'question 1',
    answer: ' some random answer that doesnt mean anything'
  },
  {
    Question: 'question 2',
    answer: ' some random answer that doesnt mean anything'
  },
  {
    Question: 'question 3',
    answer: ' some random answer that doesnt mean anything'
  },
  {
    Question: 'question 4',
    answer: ' some random answer that doesnt mean anything'
  },

]

const FAQ = () => 
{

    const [selected, setSelected] = useState(null)

    // makes sure that only one of the tabs are open at any given time
   
     const toggle = (i) =>{
       if (selected === i){
           return setSelected (null)
       }
   
       setSelected(i)
     }

return(
    <div className="wrapper">
    <h1 className=' App-header'> 
      FAQ
    </h1>
      <div className = 'accordion'>
        {data.map((items, i) => (
          <div className = 'items'>
              <div className = 'title' onClick={() => toggle(i)}>
                <h2 > {items.Question}</h2>
                  <span>{selected === i ? '-': '+' }</span>
              </div>
              <div className= {selected === i ? 'content show': 'content' }>
                 {items.answer} 
              </div>
          </div>     
        ))}
      </div>
  
</div>
)
};

export default FAQ;