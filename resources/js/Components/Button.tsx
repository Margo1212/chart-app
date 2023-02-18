import React, { ButtonHTMLAttributes} from 'react';

type ButtonProps = {
    children: string;
    size?: 'sm' | 'md';
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button = ({ children, size: buttonSize, ...props } : ButtonProps) => {

    const size = buttonSize === 'sm' ? 'py-2 text-xl' : 'py-3 text-2xl';

    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${size} py-1 px-1 rounded`} {...props}>{children}</button>
    )
}
