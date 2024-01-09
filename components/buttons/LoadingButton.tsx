import * as React from 'react';
import { CgSpinner } from 'react-icons/cg';

interface ILoadingButtonProps {
  bgColor: string
  borderColor: string
  labelColor: string
  label: string
  loading?: boolean
  type?: "reset" | "button" | "submit"
  onClick?: () => void
}

const LoadingButton: React.FunctionComponent<ILoadingButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.loading}
      className={`${props.bgColor} ${props.labelColor} py-1.5 ${props.loading ? 'pl-4 pr-5' : 'px-5'} border ${props.borderColor} rounded inline-flex items-center text-sm`}
      type={props.type}
    >
      {props.loading && <CgSpinner
        className="animate-spin text-white mr-2"
        size={20}
      />} {props.label}
    </button>
  );
};

export default LoadingButton;
