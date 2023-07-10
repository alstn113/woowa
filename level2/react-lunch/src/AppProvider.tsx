import ModalProvider from './state/contexts/modal/ModalProvider.tsx';
import RestaurantsProvider from './state/contexts/restaurants/RestaurantsProvider.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <RestaurantsProvider>
      <ModalProvider>
        <GlobalStyle />
        {children}
      </ModalProvider>
    </RestaurantsProvider>
  );
};

export default AppProvider;
