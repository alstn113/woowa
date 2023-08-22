import useToast from '../components/common/toast/use-toast';

const NotFoundPage = () => {
  const toast = useToast();
  return (
    <div>
      NotFoundPage
      <div>
        <button
          type="button"
          onClick={() => {
            toast({
              duration: null,
            });
          }}
        >
          toast
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            toast({
              status: 'success',
            });
          }}
        >
          toast
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            toast({
              status: 'error',
            });
          }}
        >
          toast
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
