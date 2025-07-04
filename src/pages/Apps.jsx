import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiMusic, FiMail, FiPhone, FiMessageSquare, FiMap, FiShoppingCart, FiBook, FiVideo, FiImage, FiHeadphones, FiGamepad2 } = FiIcons;

const Apps = () => {
  const apps = [
    { name: 'Camera', icon: FiCamera, color: 'bg-gray-700' },
    { name: 'Music', icon: FiMusic, color: 'bg-purple-500' },
    { name: 'Mail', icon: FiMail, color: 'bg-blue-500' },
    { name: 'Phone', icon: FiPhone, color: 'bg-green-500' },
    { name: 'Messages', icon: FiMessageSquare, color: 'bg-blue-400' },
    { name: 'Maps', icon: FiMap, color: 'bg-red-500' },
    { name: 'Shopping', icon: FiShoppingCart, color: 'bg-orange-500' },
    { name: 'Books', icon: FiBook, color: 'bg-brown-500' },
    { name: 'Videos', icon: FiVideo, color: 'bg-red-600' },
    { name: 'Gallery', icon: FiImage, color: 'bg-pink-500' },
    { name: 'Podcasts', icon: FiHeadphones, color: 'bg-indigo-500' },
    { name: 'Games', icon: FiGamepad2, color: 'bg-yellow-500' },
  ];

  return (
    <motion.div 
      className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-blue-50 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Apps</h1>
        <p className="text-gray-600">All your applications in one place</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
              <SafeIcon icon={app.icon} className="w-8 h-8 text-white" />
            </div>
            <span className="text-xs text-gray-700 text-center font-medium">{app.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-6 bg-white rounded-2xl p-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Recently Used</h3>
        <div className="flex space-x-4">
          {apps.slice(0, 4).map((app, index) => (
            <motion.div
              key={`recent-${app.name}`}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            >
              <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center mb-1 shadow-md`}>
                <SafeIcon icon={app.icon} className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600 text-center">{app.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Apps;