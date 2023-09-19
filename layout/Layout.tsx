import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

  const router = useRouter();
  const isAuthPage = router.pathname === '/Login' || router.pathname === '/Signup';

  return (
    <>
      <Header />
      {!isAuthPage && <SideBar>{children}</SideBar>}
    </>
  );
};

export default Layout;
