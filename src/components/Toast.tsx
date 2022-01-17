import { useRecoilState } from 'recoil';
import { ToastState } from 'src/states/toastStates';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/solid';
import { toNamespacedPath } from 'path/posix';

export type ToastMessageType = 'ok' | 'warning' | 'error' | 'confirm';

export const Toast: React.FC = () => {
  const [toast, setToast] = useRecoilState(ToastState);
  const StatusIcon: React.FC<{ className: string }> = ({ className }) => {
    switch (toast.messageType) {
      case 'ok':
        return <CheckCircleIcon className={className} />;
      case 'warning':
        return <ExclamationCircleIcon className={className} />;
      case 'error':
        return <XCircleIcon className={className} />;
      default:
        return <QuestionMarkCircleIcon className={className} />;
    }
  };
  const StatusColor = () => {
    switch (toast.messageType) {
      case 'ok':
        return 'bg-green-600 text-bright';
      case 'warning':
        return 'bg-orange-500 text-bright';
      case 'error':
        return 'bg-red-500 text-bright';
      default:
        return 'dark:bg-main bg-bright border-2 dark:border-bright border-main';
    }
  };

  return (
    <div
      onClick={() => {
        if (toast.messageType !== 'confirm')
          setToast({ ...toast, isOpen: false });
      }}
      className={`fixed inset-0 transition-all w-screen h-screen ${
        toast.isOpen ? `opacity-100 z-40` : `opacity-0 -z-10`
      }`}
    >
      <div
        className={`${
          toast.isOpen
            ? `laptop:right-80 tablet:right-40 right-8`
            : `laptop:right-60 tablet:right-30 right-2`
        } laptop:bottom-60 tablet:bottom-40 bottom-20 ease-in-out transition-all absolute p-4 rounded-md ${StatusColor()}`}
      >
        <div className="flex items-center justify-between gap-2">
          <StatusIcon className="w-6" />
          <p>{toast.message}</p>
        </div>
        {toast.messageType === 'confirm' && (
          <div className="flex items-center justify-end gap-4 mt-3">
            <button
              onClick={() =>
                setToast({ ...toast, isOpen: false, confirm: undefined })
              }
            >
              Cancel
            </button>
            <button
              onClick={() => {
                typeof toast.confirm !== 'undefined' && toast.confirm();
                setToast({ ...toast, isOpen: false, confirm: undefined });
              }}
              className="bg-main text-bright dark:bg-bright dark:text-dark px-2 py-1 rounded-md"
            >
              Ok
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
