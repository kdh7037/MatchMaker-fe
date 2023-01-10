import {FC, ReactNode} from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      {children}
    </div>
  );
};

export default Layout;
