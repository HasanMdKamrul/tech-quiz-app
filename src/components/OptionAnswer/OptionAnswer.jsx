import React from 'react';

const Options = ({option}) => {

    console.log(option)

    const changeHandler = (event)=>{
        console.log(event.target.value)
    }

    return (
        <div>
            <input onChange={changeHandler} type="radio" value={option} /> {option}
        </div>
    );
};

export default Options;