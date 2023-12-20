import * as React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string
  placeholder?: string
  type: React.HTMLInputTypeAttribute
  register: UseFormRegisterReturn
  error?: FieldError
}

const Input: React.FunctionComponent<InputProps> = (props) => {
  return (
    <div className='mb-4'>
      <label
        htmlFor={props.label}
        className='block text-sm mb-2'
      >
        {props.label}
      </label>
      <input
        {...props.register}
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
        className={`
          appearance-none
          border ${props.error && 'border-red-500'} rounded w-full p-3 leading-tight
          focus:outline-none focus:shadow-outline
          text-zinc-900 text-sm
        `}
      />
      {props.error && (
        <p className="mt-1 text-xs text-red-500">
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
