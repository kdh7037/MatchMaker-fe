import {PopupConfig, popupListState} from '@src/states/popup';
import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

const usePopup = () => {
  const [popupList, setPopupList] = useRecoilState(popupListState);
  const popup = popupList.length > 0 ? popupList[0] : undefined;

  const showPopup = useCallback((popup: Omit<PopupConfig, 'id'>) => {
    const id = Math.random().toString();
    setPopupList(prev => [...prev, {...popup, id}]);
    return id;
  }, []);

  const hidePopup = useCallback((id: string) => {
    setPopupList(prev => prev.filter(popup => popup.id !== id));
  }, []);

  return {
    showPopup,
    hidePopup,
    popup,
  };
};

export default usePopup;
