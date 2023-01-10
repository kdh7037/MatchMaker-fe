import {FC, ReactNode} from 'react';

interface SubmitButtonProps {
  children: ReactNode
}

const SubmitButton: FC<SubmitButtonProps> = ({
  children = '제출'
}) => (
  <button
    type="submit"
    className="px-4 py-2 mt-2 text-white bg-blue-600 rounded"
  >
    {children}
  </button>
);

export default SubmitButton;
