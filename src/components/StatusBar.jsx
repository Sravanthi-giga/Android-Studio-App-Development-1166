import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiBattery, FiSignal } = FiIcons;

const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.div 
      className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-1">
        <span className="font-semibold">{currentTime}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SafeIcon icon={FiSignal} className="w-4 h-4" />
        <SafeIcon icon={FiWifi} className="w-4 h-4" />
        <SafeIcon icon={FiBattery} className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default StatusBar;