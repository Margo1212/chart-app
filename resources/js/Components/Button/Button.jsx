import React from 'react';


export const Button = ({ text,  size: buttonSize, ...props }) => {
    const size = buttonSize === 'sm' ? 'py-2 text-xl' : 'py-3 text-2xl';

    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${size} py-1 px-1 rounded`} {...props}><span>{text}</span></button>
    )
}