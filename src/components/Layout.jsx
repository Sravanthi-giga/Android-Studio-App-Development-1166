import React from 'react';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto bg-white shadow-2xl">
      <StatusBar />
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      <NavigationBar />
    </div>
  );
};

export default Layout;