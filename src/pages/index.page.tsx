import Button from '@components/button';
import usePopup from '@components/popup/hooks/usePopup';
import useToast from '@components/toast/hooks/useToast';
import {useEffect} from 'react';

const MainPage = () => {
  const {showPopup} = usePopup();
  const {showToast} = useToast();

  useEffect(() => {
    const onClickToastButton = () => {
      showToast({
        content: '토스트' + Math.random(),
      });
    };

    showPopup({
      content: '팝업입니다.',
      buttons: ({hidePopup}) => (
        <>
          <Button
            onClick={hidePopup}
            className="mr-1"
          >
            확인
          </Button>
          <Button
            onClick={onClickToastButton}
            className="ml-1"
          >
            토스트
          </Button>
        </>
      ),
    });
  }, []);

  return (
    <p>Main Page</p>
  );
};

export default MainPage;
