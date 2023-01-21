import {atom} from 'recoil';

export type ToastConfig = {
  id: string;
  content: string;
}

export const toastListState = atom<ToastConfig[]>({
  key: 'toastListState',
  default: [],
});
