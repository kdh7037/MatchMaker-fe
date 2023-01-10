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
        로그인 페이지
      </h1>
      <Form onSubmit={submitHandler}>
        <FormInput
          label="아이디"
          type="text"
          name="id"
          placeholder="아이디를 입력하세요."
        />
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
        />
        <SubmitButton>로그인</SubmitButton>
      </Form>
    </section>
  );
};

export default LoginPage;
