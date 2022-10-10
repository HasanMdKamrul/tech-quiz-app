import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPlayGround = () => {

    const {data:quizData} = useLoaderData();

    console.log(quizData)
    return (
        <div>
            <h1>Quiz and Answer</h1>
        </div>
    );
};

export default QuizPlayGround;