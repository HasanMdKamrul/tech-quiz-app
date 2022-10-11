import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CorrectContext, InCorrectContext } from "../../context/Context";

const Options = ({ option,correctAnswer }) => {

    const [answer,setAnswer] = useState(false);
    const [correct,setCorrect] = useContext(CorrectContext);
    const [inCorrect,setInCorrect] = useContext(InCorrectContext);
    const [selected,setSelected] = useState(false);

  


  const changeHandler = (event) => {

    event.target.value && setSelected(true);
    
    if (event.target.value === correctAnswer  ) {
        setCorrect([...correct,event.target.value])
        toast.success('Congratulations! Correct Answer!',{autoClose:500});
        setAnswer(true)
    } else{
      setInCorrect([...inCorrect,event.target.value])
        toast.error('Oh no! Incorrect Answer!',{autoClose:500});
        setAnswer(false);
    }

  };

  // ** selected ? color ekta : 

  return (

    <div>
      {
        selected && (<div className={` rounded-xl shadow ${answer ? "bg-gray-50": "bg-gray-500"} `}>
        <ul>
                <li className="w-full m-2">
                    <div className="flex items-center pl-3">
                        
                        <label htmlFor={option} className={`py-3 ml-2 w-full text-sm flex items-center font-medium
                        ${answer ? " text-blue-700" :  "text-black"}
                        `}><input onChange={changeHandler} id={option} type="radio" value={option} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>{option}</label>
                    </div>
                </li>
        </ul>
    </div>)
      }
      {
        !selected && (
          <div className={`rounded-xl shadow bg-sky-200`}>
          <ul>
                  <li className="w-full m-2">
                      <div className="flex items-center pl-3">
                          
                          <label htmlFor={option} className={`py-3 ml-2 w-full text-sm flex items-center font-medium
                         text-red
                          `}><input onChange={changeHandler} id={option} type="radio" value={option} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>{option}</label>
                      </div>
                  </li>
          </ul>
      </div>
        )
      }
    </div>
    
  );
};

export default Options;