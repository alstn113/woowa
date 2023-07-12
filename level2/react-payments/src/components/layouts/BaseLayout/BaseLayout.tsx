import Header from '../../base/Header/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
  title?: string;
  withBackButton?: boolean;
}

const BaseLayout = ({ children, title, withBackButton }: BaseLayoutProps) => {
  return (
    <>
      <Header title={title} withBackButton={withBackButton} />
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
