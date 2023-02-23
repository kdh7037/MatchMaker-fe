import Form, {OnSubmitHandler} from '@components/form';
import FormInput from '@components/form/input';
import SubmitButton from '@components/form/submit';
import {useCallback, useState} from 'react';

const LoginPage = () => {
  const [statusText, setStatusText] = useState('');
  const resetStatusText = useCallback(() => setStatusText(''), []);

  const submitHandler: OnSubmitHandler = async formData => {
    console.log(formData);
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      return setStatusText('로그인에 실패했습니다.');
    }
    const result: {result: boolean} = await response.json();
    setStatusText(`로그인에 ${result.result ? '성공' : '실패'}했습니다.`);
  };

  return (
    <>
      <h1 className="mb-8 text-3xl">
        로그인 페이지
      </h1>
      <Form onSubmit={submitHandler}>
        <FormInput
          label="아이디"
          type="text"
          name="userId"
          onChange={resetStatusText}
          placeholder="아이디를 입력하세요."
        />
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          onChange={resetStatusText}
          placeholder="비밀번호를 입력하세요."
        />
        {!!statusText && (
          <p className="mb-2 -my-2 text-sm text-red-600">
            {statusText}
          </p>
        )}
        <SubmitButton>로그인</SubmitButton>
      </Form>
    </>
  );
};

export default LoginPage;
