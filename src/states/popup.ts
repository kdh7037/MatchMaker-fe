import {ReactNode} from 'react';
import {atom, selector} from 'recoil';

export type PopupConfig = {
  id: string;
  content: ReactNode;
  buttons?: ReactNode;
}

export const popupListState = atom<PopupConfig[]>({
  key: 'popupListState',
  default: [],
});

export const popupState = selector<PopupConfig>({
  key: 'PopupState',
  get: ({get}) => {
    const [popup] = get(popupListState);
    return popup;
  },
});
