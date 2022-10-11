import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CorrectContext, InCorrectContext } from "../../context/Context";

const Options = ({ option,correctAnswer }) => {

    const [answer,setAnswer] = useState(false);
    const [correct,setCorrect] = useContext(CorrectContext);
    const [inCorrect,setInCorrect] = useContext(InCorrectContext)

  


  const changeHandler = (event) => {
    
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

  return (
    <div className={` rounded-xl shadow ${answer ? "bg-gray-50": "bg-gray-200"} `}>
        <ul>
                <li className="w-full m-2">
                    <div className="flex items-center pl-3">
                        <input onChange={changeHandler} id="horizontal-list-radio-license" type="radio" value={option} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="horizontal-list-radio-license" className={`py-3 ml-2 w-full text-sm font-medium
                        ${answer ? " text-blue-700" :  "text-black"}
                        `}>{option}</label>
                    </div>
                </li>
        </ul>
    </div>
  );
};

export default Options;
