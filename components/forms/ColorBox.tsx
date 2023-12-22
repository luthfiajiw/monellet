import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { MdCheckCircle } from 'react-icons/md';

interface IColorBoxProps {
  value?: string
  error?: FieldError
  onChange: (color: string) => void
}

const ColorBox: React.FunctionComponent<IColorBoxProps> = (props) => {
  return (
    <>
      <label
        htmlFor="Color"
        className='block text-sm mb-2'
      >
        Color
      </label>
      <div className='flex flex-wrap'>
        {colors.map(color => (
          <div
            className={`${props.value == color ? 'p-1.5' : 'p-4'} rounded mr-2 mb-2 ${props.value == color ? 'border-2 border-white' : ''}`}
            style={{ backgroundColor: `${color}` }}
            onClick={() => props.onChange(color)}
          >
            {props.value == color && <MdCheckCircle color='white'/>}
          </div>
        ))}
      </div>
      {props.error && (
        <p className="mt-1 ml-1 text-xs text-red-500">
          {props.error.message}
        </p>
      )}
    </>
  );
};

export default ColorBox;

const colors = [
  "rgb(239 68 68)", "rgb(153 27 27)", "rgb(251 146 60)", "rgb(194 65 12)", "rgb(251 191 36)",
  "rgb(180 83 9)", "rgb(250 204 21)", "rgb(163 230 53)", "rgb(77 124 15)", "rgb(74 222 128)",
  "rgb(21 128 61)", "rgb(45 212 191)", "rgb(15 118 110)", "rgb(34 211 238)", "rgb(14 116 144)",
  "rgb(14 165 233)", "rgb(3 105 161)", "rgb(96 165 250)", "rgb(29 78 216)", "rgb(167 139 250)",
  "rgb(109 40 217)", "rgb(244 114 182)", "rgb(190 24 93)", "rgb(251 113 133)", "rgb(190 18 60)",
]
