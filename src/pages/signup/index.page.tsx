import Form, {OnSubmitHandler} from '@components/form';
import FormInput from '@components/form/input';
import SubmitButton from '@components/form/submit';

const LoginPage = () => {
  const submitHandler: OnSubmitHandler = formData => {
    console.log(formData);
  };

  return (
    <section className="container p-4 m-auto">
      <h1 className="mb-8 text-3xl">
        회원가입 페이지
      </h1>
      <Form onSubmit={submitHandler}>
        <FormInput
          label="아이디"
          type="text"
          name="id"
          placeholder="아이디를 입력하세요."
        />
        <FormInput
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요."
        />
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
        />
        <FormInput
          label="비밀번호 확인"
          type="password"
          name="password-confirm"
          placeholder="비밀번호를 한 번 더 입력하세요."
        />
        <SubmitButton>회원가입</SubmitButton>
      </Form>
      <a href="/">돌아가기</a>
    </section>
  );
};

export default LoginPage;
