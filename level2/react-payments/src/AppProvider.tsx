import GlobalStyle from './styles/GlobalStyle';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default AppProvider;
