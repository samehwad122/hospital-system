// src/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-5 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
