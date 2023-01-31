import Link from 'next/link';

const Profile = () => {
  return (
    <Link
      href="/my"
      className="px-4 py-2 ml-auto rounded hover:bg-white hover:bg-opacity-10"
    >
      GF님
    </Link>
  );
};

export default Profile;
