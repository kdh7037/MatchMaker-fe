import {FC, ReactNode} from 'react';
import Footer from './footer';
import GNB from './gnb';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <GNB />
      <section className="container flex-1 p-4 mx-auto">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
