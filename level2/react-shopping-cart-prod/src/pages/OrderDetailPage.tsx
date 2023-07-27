import { useParams } from 'react-router-dom';

const OrderDetailPage = () => {
  const params = useParams();
  const orderId = Number(params.orderId);
  return <div>OrderDetailPage {orderId}</div>;
};

export default OrderDetailPage;
