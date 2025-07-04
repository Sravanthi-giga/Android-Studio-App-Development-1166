import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiCloud, FiThermometer, FiCalendar, FiClock, FiTrendingUp } = FiIcons;

const Home = () => {
  const weatherData = {
    temperature: '24°C',
    condition: 'Partly Cloudy',
    humidity: '65%',
    windSpeed: '12 km/h'
  };

  const quickActions = [
    { icon: FiCalendar, label: 'Calendar', color: 'bg-red-500' },
    { icon: FiClock, label: 'Clock', color: 'bg-blue-500' },
    { icon: FiTrendingUp, label: 'Stocks', color: 'bg-green-500' },
    { icon: FiThermometer, label: 'Weather', color: 'bg-orange-500' },
  ];

  return (
    <motion.div 
      className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Welcome Section */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Good Morning!</h1>
        <p className="text-gray-600">Welcome to your Android-style app</p>
      </motion.div>

      {/* Weather Widget */}
      <motion.div 
        className="bg-white rounded-2xl p-6 mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <SafeIcon icon={FiCloud} className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Weather</h3>
              <p className="text-gray-600 text-sm">{weatherData.condition}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-gray-800">{weatherData.temperature}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <SafeIcon icon={FiThermometer} className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-gray-600">Humidity: {weatherData.humidity}</span>
          </div>
          <div className="flex items-center">
            <SafeIcon icon={FiSun} className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-gray-600">Wind: {weatherData.windSpeed}</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.label}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                <SafeIcon icon={action.icon} className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-800 font-medium">{action.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { time: '2 hours ago', activity: 'Photo uploaded to gallery' },
            { time: '5 hours ago', activity: 'Message sent to John' },
            { time: '1 day ago', activity: 'App updated successfully' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              <p className="text-gray-800 text-sm">{item.activity}</p>
              <span className="text-gray-500 text-xs">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;