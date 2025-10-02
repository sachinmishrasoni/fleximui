import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SettingsDrawer from './SettingsDrawer';

const CommonLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <SettingsDrawer />
    </>
  )
}

export default CommonLayout;
