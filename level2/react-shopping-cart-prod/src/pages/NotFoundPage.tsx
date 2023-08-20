import useToast from '../components/common/toast/use-toast';

const NotFoundPage = () => {
  const toast = useToast();

  return (
    <div>
      NotFoundPage
      <div>
        <button type="button" onClick={() => toast()}>
          toast
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
