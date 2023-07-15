import * as S from './ErrorMessage.styles';

interface ErrorMesssageProps {
  message: string;
}

const ErrorMesssage = ({ message }: ErrorMesssageProps) => {
  return <S.Container>{message}</S.Container>;
};

export default ErrorMesssage;
