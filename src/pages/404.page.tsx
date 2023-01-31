import {NextPage} from 'next';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const NotFoundPage: NextPage = () => {
  const [href, setHref] = useState('');

  useEffect(() => setHref(window.location.href));

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="mb-6 text-6xl">404</h1>
      {!!href && (
        <>
          <p>
            <span className="font-bold text-gray-500">{href}</span>
            {' '}
            에 해당하는 페이지를 찾을 수 없습니다.
          </p>
          <Link
            href="/"
            className="my-16 text-blue-500 underline-offset-4 hover:underline"
          >
            홈으로 돌아가기
          </Link>
        </>
      )}
    </div>
  );
};

export default NotFoundPage;
