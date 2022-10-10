import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import OptionAnswer from '../OptionAnswer/OptionAnswer';


const QuestionsAndAnswers = ({questionItem,questionItem:{options,correctAnswer,question}}) => {
    // console.log(questionItem)
    return (
        <div>
            <div className='flex justify-between ' >
            <h1 className='text-xl font-bold'>Question : {question}</h1>
            <EyeIcon className='w-6 h-6 text-white'/>
            </div>
           {
            options.map((option,index) => <OptionAnswer key={index} correctAnswer={correctAnswer} option={option}/>)
           }
        </div>
    );
};

export default QuestionsAndAnswers;