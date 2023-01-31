import {PopupConfig, popupListState} from '@states/popup';
import {ReactNode, useCallback} from 'react';
import {useRecoilState} from 'recoil';

type ButtonsFuncArgs = {
  id: string;
  hidePopup: () => void;
};
type ButtonsFunc = (args: ButtonsFuncArgs) => ReactNode;
type ShowPopupFuncArgs = Omit<PopupConfig, 'id' | 'buttons'> & {
  buttons: PopupConfig['buttons'] | ButtonsFunc;
}

const usePopup = () => {
  const [popupList, setPopupList] = useRecoilState(popupListState);
  const popup = popupList.length > 0 ? popupList[0] : undefined;

  const showPopup = useCallback((args: ShowPopupFuncArgs) => {
    const id = Math.random().toString();
    const popupConfig: PopupConfig = {
      ...args,
      buttons:
        typeof args.buttons === 'function'
          ? args.buttons({id, hidePopup: () => hidePopup(id)})
          : args.buttons,
      id,
    };
    setPopupList(prev => [...prev, popupConfig]);
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
