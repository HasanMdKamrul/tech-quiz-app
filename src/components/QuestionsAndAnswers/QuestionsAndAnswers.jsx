import React from 'react';
import OptionAnswer from '../OptionAnswer/OptionAnswer';

const QuestionsAndAnswers = ({questionItem,questionItem:{options,correctAnswer,question}}) => {
    console.log(questionItem)
    return (
        <div>
            <h1 className='text-xl font-bold'>Question : {question}</h1>
           {
            options.map(option => <OptionAnswer key={option.id} option={option}/>)
           }
        </div>
    );
};

export default QuestionsAndAnswers;