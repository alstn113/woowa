import ModalProvider from './state/contexts/modal/ModalProvider';
import GlobalStyle from './styles/GlobalStyle';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ModalProvider>
      <GlobalStyle />
      {children}
    </ModalProvider>
  );
};

export default AppProvider;
