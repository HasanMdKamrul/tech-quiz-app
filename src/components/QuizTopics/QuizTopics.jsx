import React, { useContext } from 'react';
import { TopicsDataContext } from '../../context/Context';

const QuizTopics = () => {

    const data = useContext(TopicsDataContext);

    console.log(data)

    return (
        <div>
            <h1>Quiz Topics</h1>
        </div>
    );
};

export default QuizTopics;