import usePopup from '@components/popup/hooks/usePopup';
import {useEffect} from 'react';

const MainPage = () => {
  const {showPopup} = usePopup();

  useEffect(() => {
    showPopup({
      content: '팝업입니다.',
    });
  }, []);

  return (
    <p>Main Page</p>
  );
};

export default MainPage;
