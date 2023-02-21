import Form, {OnSubmitHandler} from '@components/form';
import FormInput from '@components/form/input';
import SubmitButton from '@components/form/submit';
import Button from '@components/button';

const MyPage = () => {
  const submitHandler: OnSubmitHandler = formData => {
    console.log(formData);
  };

  return (
    <>
      <h1 className="mb-8 text-3xl">
        마이 페이지
      </h1>
      <Form onSubmit={submitHandler}>
        <FormInput
          label="아이디"
          type="text"
          name="userId"
          readOnly
          disabled
        />
        <FormInput
          label="닉네임"
          type="input"
          name="nickname"
          placeholder="변경할 닉네임을 입력하세요."
        />
        <FormInput
          label="이메일"
          type="email"
          name="email"
          placeholder="변경할 이메일을 입력하세요."
        />
        <SubmitButton>수정</SubmitButton>
        <Button>돌아가기</Button>
      </Form>
    </>
  );
};

export default MyPage;
