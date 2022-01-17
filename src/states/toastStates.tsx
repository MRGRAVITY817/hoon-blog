import { ToastMessageType } from '@components/Toast';
import { atom } from 'recoil';

interface ToastStateProps {
  isOpen: boolean;
  messageType: ToastMessageType;
  message: string;
  confirm?: () => void;
}

export const ToastState = atom<ToastStateProps>({
  key: 'ToastState',
  default: {
    isOpen: false,
    messageType: 'ok',
    message: '',
    confirm: undefined
  }
});
