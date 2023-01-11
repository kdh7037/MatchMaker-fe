import Button, {ButtonProps} from '@components/button';
import {FC} from 'react';

const SubmitButton: FC<ButtonProps> = ({
  children = '제출',
  ...props
}) => (
  <Button
    {...props}
    type="submit"
  >
    {children}
  </Button>
);

export default SubmitButton;
