import React from 'react';
import { ChangeEventHandler, InputHTMLAttributes, useState } from 'react';

type InputProps = {  
  onChange?: (value: string | number) => void;
  label?: string;
  type: "text" | "number" | "color";
  placeholder?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const Input = ({ placeholder, type, label, onChange, ...props }: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <label>
        {label}
      <input
        type={type}
        className="bg-background mb-8 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-12 sm:text-sm border-2 border-gray-200 rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};