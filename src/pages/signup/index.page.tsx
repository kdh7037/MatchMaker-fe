import Button from '@components/button';
import Form, {OnSubmitHandler} from '@components/form';
import FormInput from '@components/form/input';
import SubmitButton from '@components/form/submit';

const LoginPage = () => {
  const submitHandler: OnSubmitHandler = formData => {
    console.log(formData);
  };

  return (
    <>
      <a
        href="/"
        className="block underline text-slate-500"
      >
        돌아가기
      </a>
      <h1 className="my-8 text-3xl">
        회원가입
      </h1>
      <Form onSubmit={submitHandler}>
        <FormInput
          label="닉네임"
          type="text"
          name="nickname"
          placeholder="닉네임을 입력하세요."
          required
        >
          {/* 닉네임 중복검사가 완료되지 않은 상태일 때 노출 */}
          <Button
            className="ml-4"
            // 입력된 닉네임이 없을 때 disabled
          >
            닉네임 중복 검사
          </Button>
          {/* 닉네임 중복검사가 완료된 상태일 때 노출 */}
          <Button
            className="ml-4 bg-green-600 border-green-600"
            disabled
          >
            ✓
          </Button>
        </FormInput>
        <FormInput
          label="아이디"
          type="text"
          name="id"
          placeholder="아이디를 입력하세요."
          required
        >
          {/* 아이디 중복검사가 완료되지 않은 상태일 때 노출 */}
          <Button
            className="ml-4"
            // 입력된 아이디가 없을 때 disabled
          >
            아이디 중복 검사
          </Button>
          {/* 아이디 중복검사가 완료된 상태일 때 노출 */}
          <Button
            className="ml-4 bg-green-600 border-green-600"
            disabled
          >
            ✓
          </Button>
        </FormInput>
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
          required
        />
        <FormInput
          label="비밀번호 확인"
          type="password"
          name="password-confirm"
          placeholder="비밀번호를 한 번 더 입력하세요."
          required
        />
        <FormInput
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />
        {/* 빈 필드가 존재하거나 아이디/닉네임 중복검사가 완료되지 않은 상태일 때 disabled */}
        <SubmitButton
          className="mt-6"
        >
          완료
        </SubmitButton>
      </Form>
    </>
  );
};

export default LoginPage;
