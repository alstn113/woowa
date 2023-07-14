import CreditCardFormProvider from './state/contexts/creditCardForm/CreditCardFormProvider';
import ModalProvider from './state/contexts/modal/ModalProvider';
import GlobalStyle from './styles/GlobalStyle';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ModalProvider>
      <CreditCardFormProvider>
        <GlobalStyle />
        {children}
      </CreditCardFormProvider>
    </ModalProvider>
  );
};

export default AppProvider;
