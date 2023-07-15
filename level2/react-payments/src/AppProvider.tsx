import CreditCardFormProvider from './state/contexts/creditCardForm/CreditCardFormProvider';
import ModalProvider from './state/contexts/modal/ModalProvider';
import GlobalStyle from './styles/GlobalStyle';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <CreditCardFormProvider>
      <ModalProvider>
        <GlobalStyle />
        {children}
      </ModalProvider>
    </CreditCardFormProvider>
  );
};

export default AppProvider;
