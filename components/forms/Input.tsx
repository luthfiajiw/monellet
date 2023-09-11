import * as React from 'react';

interface InputProps {
  label: string,
  placeholder?: string
  type: React.HTMLInputTypeAttribute
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
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
        className='
          appearance-none
          border rounded w-full p-3 leading-tight
          focus:outline-none focus:shadow-outline
          text-zinc-900 text-sm
        '
      />
    </div>
  );
};

export default Input;
