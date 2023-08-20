// Root Provider에 추가할 Provider
// useToas를 통해서 사용하기 위함.

import useToastStore from './toast-store';

const ToastProvider = () => {
  const { toasts } = useToastStore();

  return <div>ToastProvider</div>;
};

export default ToastProvider;
