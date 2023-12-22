import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { NumericFormat, OnValueChange } from 'react-number-format';

interface NumberInputProps {
  label: string
  value?: number
  placeholder?: string
  error?: FieldError
  onValueChange?: OnValueChange
}

const NumberInput: React.FunctionComponent<NumberInputProps> = (props) => {
  return (
    <div className='mb-4'>
      <label
        htmlFor={props.label}
        className='block text-sm mb-2'
      >
        {props.label}
      </label>
      <NumericFormat
        value={props.value}
        thousandSeparator=","
        decimalSeparator='.'
        prefix='Rp '
        className={`
          appearance-none
          border ${props.error && 'border-red-500'} rounded w-full p-3 leading-tight
          focus:outline-none focus:shadow-outline
          text-zinc-900 text-sm
        `}
        onValueChange={props.onValueChange}
      />
      {props.error && (
        <p className="mt-1 ml-1 text-xs text-red-500">
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default NumberInput;
