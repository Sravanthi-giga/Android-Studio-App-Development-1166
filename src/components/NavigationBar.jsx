import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiGrid, FiSettings, FiUser } = FiIcons;

const NavigationBar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/apps', icon: FiGrid, label: 'Apps' },
    { path: '/settings', icon: FiSettings, label: 'Settings' },
    { path: '/profile', icon: FiUser, label: 'Profile' },
  ];

  return (
    <motion.div 
      className="flex justify-around items-center bg-white border-t border-gray-200 py-2"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
              isActive 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <SafeIcon 
              icon={item.icon} 
              className={`w-6 h-6 mb-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} 
            />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default NavigationBar;