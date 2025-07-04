import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit3, FiCamera, FiStar, FiActivity, FiTrendingUp } = FiIcons;

const Profile = () => {
  const userStats = [
    { label: 'Apps Used', value: '24', icon: FiActivity, color: 'text-blue-500' },
    { label: 'Screen Time', value: '5h 32m', icon: FiTrendingUp, color: 'text-green-500' },
    { label: 'Favorites', value: '12', icon: FiStar, color: 'text-yellow-500' },
  ];

  const profileItems = [
    { icon: FiMail, label: 'Email', value: 'john.doe@email.com' },
    { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: FiMapPin, label: 'Location', value: 'New York, NY' },
    { icon: FiCalendar, label: 'Member Since', value: 'January 2023' },
  ];

  return (
    <motion.div 
      className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Header */}
      <motion.div 
        className="bg-white rounded-2xl p-6 mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center mb-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiUser} className="w-10 h-10 text-white" />
            </div>
            <motion.button
              className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiCamera} className="w-4 h-4 text-white" />
            </motion.button>
          </div>
          <div className="ml-4 flex-1">
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">Android User</p>
            <motion.button
              className="mt-2 flex items-center text-blue-500 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiEdit3} className="w-4 h-4 mr-1" />
              Edit Profile
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="grid grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {userStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
            <p className="text-xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Profile Information */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="px-4 py-3 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {profileItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <SafeIcon icon={item.icon} className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        className="mt-6 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.button
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Sync Data
        </motion.button>
        <motion.button
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Sign Out
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Profile;