import {FC, FormEventHandler, ReactNode, useCallback} from 'react';

export type OnSubmitHandler = (formData: Record<string, unknown>) => void;

interface FormProps {
  children: ReactNode;
  onSubmit: OnSubmitHandler;
}

const Form: FC<FormProps> = ({
  children,
  onSubmit,
}) => {
  const submitHandler: FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    onSubmit(Object.fromEntries(formData.entries()));
  }, [onSubmit]);

  return (
    <form onSubmit={submitHandler}>
      {children}
    </form>
  );
};

export default Form;
