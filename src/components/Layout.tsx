import { ReactNode } from 'react';
import { Navbar, Footer } from '@/components';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  headerClassName?: string;
  headerBackgroundImage?: string;
}

export default function Layout({ 
  children, 
  showHeader = true,
  showFooter = true,
  headerClassName = "relative w-full py-10",
  headerBackgroundImage
}: LayoutProps) {
  return (
    <>
      {showHeader && (
        <header className={headerClassName}>
          {headerBackgroundImage && (
            <div className={`absolute top-0 right-0 w-full h-full ${headerBackgroundImage} bg-cover bg-bottom z-0`} />
          )}
          <Navbar />
        </header>
      )}
      {children}
      {showFooter && <Footer />}
    </>
  );
}