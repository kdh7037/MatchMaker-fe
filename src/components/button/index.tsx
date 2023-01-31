import clsx from 'clsx';
import {ButtonHTMLAttributes, FC, ReactNode} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <button
    type="button"
    {...props}
    className={clsx(
      'px-4 py-2 text-white rounded border-2 transition-all',
      props.disabled
        ? 'bg-slate-300 border-slate-300'
        : 'bg-blue-600 border-blue-600',
      props.className
    )}
  >
    {children}
  </button>
);

export default Button;
