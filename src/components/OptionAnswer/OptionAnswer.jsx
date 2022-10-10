import React from 'react';

const Options = ({option}) => {

    console.log(option)

    return (
        <div>
            <button className='bg-sky-500 m-2 p-2 rounded text-white'>
                {option}
            </button>
        </div>
    );
};

export default Options;