import Link from 'next/link';
import Profile from './Profile';

const GNB = () => {
  return (
    <nav className="w-full text-white bg-blue-600 shadow">
      <div className="container flex items-center p-4 mx-auto">
        <h1>
          <Link href="/" className="px-4 py-2 -mx-4">
            Match Maker
          </Link>
        </h1>
        <Profile />
      </div>
    </nav>
  );
};

export default GNB;
