import clsx from 'clsx';
import {FC, InputHTMLAttributes, ReactNode, useId} from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: ReactNode;
}

const FormInput: FC<FormInputProps> = ({
  label,
  children,
  ...inputProps
}) => {
  const id = useId();

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        {...inputProps}
        className={clsx(
          'p-2 border-2 rounded focus:border-blue-600',
          inputProps.className
        )}
      />
      {children}
    </div>
  );
};

export default FormInput;
