import Button from '@components/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Profile from './Profile';

const GNB = () => {
  const router = useRouter();

  const [hasSession, setHasSession] = useState(true);

  const redirectToLogin = () => {
    router.push('/login');
  };

  const redirectToLogout = () => {
    setHasSession(false);
  };

  const redirectToSignup = () => {
    router.push('/signup');
  };

  const redirectToMatchList = () => {
    router.push('/match');
  };

  const redirectToDiaryList = () => {
    router.push('/diary');
  };

  const loginButton = (
    <>
      <Button
        name="login"
        onClick={redirectToLogin}
      >
        로그인
      </Button>
      <Button
        name="signup"
        onClick={redirectToSignup}
      >
        회원가입
      </Button>
    </>
  );

  const logoutButton = (
    <>
      <Profile />
      <Button
        name="logout"
        onClick={redirectToLogout}
      >
        로그아웃
      </Button>
    </>
  );

  return (
    <nav className="w-full text-white bg-blue-600 shadow">
      <div className="container flex items-center p-4 mx-auto">
        <h1>
          <Link href="/" className="px-4 py-2 -mx-4">
            Match Maker
          </Link>
        </h1>
        <Button onClick={redirectToMatchList}>매칭</Button>
        <Button onClick={redirectToDiaryList}>다이어리</Button>

        {hasSession ? logoutButton : loginButton}
      </div>
    </nav>
  );
};

export default GNB;
