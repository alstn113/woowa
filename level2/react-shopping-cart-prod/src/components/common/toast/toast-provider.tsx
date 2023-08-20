import useToastStore from './toast-store';

const ToastProvider = () => {
  const { bottom } = useToastStore();

  return <div>ToastProvider</div>;
};

export default ToastProvider;
