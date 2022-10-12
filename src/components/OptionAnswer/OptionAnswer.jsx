import { CheckBadgeIcon, Cog8ToothIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CorrectContext, InCorrectContext } from "../../context/Context";

const Options = ({ option,correctAnswer }) => {

    const [answer,setAnswer] = useState(false);
    const [correct,setCorrect] = useContext(CorrectContext);
    const [inCorrect,setInCorrect] = useContext(InCorrectContext);
    const [selected,setSelected] = useState(false);

  


  const changeHandler = (option) => {

   option && setSelected(true);
    
    if (option === correctAnswer  ) {
        setCorrect([...correct,option])
        toast.success('Congratulations! Correct Answer!',{autoClose:500});
        setAnswer(true)
    } else{
      setInCorrect([...inCorrect,option])
        toast.error('Oh no! Incorrect Answer!',{autoClose:500});
        setAnswer(false);
    }

  };



  return (

    <div>
      {
        selected && (<div className={` rounded-xl shadow ${answer ? "bg-gray-50": "bg-gray-500"} `}>
        <ul>
                <li className="w-full m-2">
                    <div className="flex items-center pl-3">
                        <div onClick={()=>changeHandler(option)}  className="py-3 ml-2 w-full text-sm flex items-center font-medium
                         text-red">
                          {
                            answer && <CheckBadgeIcon className="w-6 h-6 text-blue-500 mr-2"/>
                          }
                          {
                            !answer &&  <XCircleIcon className="w-6 h-6 text-red-200 mr-2" />
                          }
                            {option}
                        </div>
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
                        <div onClick={()=> changeHandler(option)}  className="py-3 ml-2 w-full text-sm flex items-center font-medium
                         text-red">
                          <Cog8ToothIcon className="w-6 h-6 text-green-600 mr-2"/>
                            {option}
                        </div>
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