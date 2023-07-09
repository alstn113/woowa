import GlobalStyle from './styles/GlobalStyle.tsx';
import RestaurantProvider from './contexts/Restaurant/RestaurantProvider.tsx';
import ModalProvider from './contexts/Modal/ModalProvider.tsx';

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
