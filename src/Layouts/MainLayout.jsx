import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/NavBar';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;