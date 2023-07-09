import ModalProvider from './contexts/Modal/ModalProvider.tsx';
import RestaurantProvider from './contexts/Restaurant/RestaurantProvider.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <RestaurantProvider>
      <ModalProvider>
        <GlobalStyle />
        {children}
      </ModalProvider>
    </RestaurantProvider>
  );
};

export default AppProvider;
