import {ToastConfig, toastListState} from '@states/toast';
import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

type ShowtoastFuncArgs = Omit<ToastConfig, 'id'>;

const useToast = () => {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const showToast = useCallback((args: ShowtoastFuncArgs) => {
    const id = Math.random().toString();
    const toastConfig: ToastConfig = {
      ...args,
      id,
    };
    setToastList(prev => [...prev, toastConfig]);
    return id;
  }, []);

  const hideToast = useCallback((id: string) => {
    setToastList(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return {
    showToast,
    hideToast,
    toastList,
  };
};

export default useToast;
