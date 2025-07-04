import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiBluetooth, FiVolume2, FiBell, FiLock, FiUser, FiSmartphone, FiShield, FiHelpCircle, FiChevronRight } = FiIcons;

const Settings = () => {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const settingsGroups = [
    {
      title: 'Network & Connectivity',
      items: [
        { 
          icon: FiWifi, 
          label: 'Wi-Fi', 
          value: wifiEnabled ? 'Connected' : 'Disconnected',
          toggle: true,
          enabled: wifiEnabled,
          onToggle: setWifiEnabled
        },
        { 
          icon: FiBluetooth, 
          label: 'Bluetooth', 
          value: bluetoothEnabled ? 'On' : 'Off',
          toggle: true,
          enabled: bluetoothEnabled,
          onToggle: setBluetoothEnabled
        },
      ]
    },
    {
      title: 'Device',
      items: [
        { icon: FiVolume2, label: 'Sound & Vibration', value: 'Ring' },
        { icon: FiBell, label: 'Notifications', value: notificationsEnabled ? 'On' : 'Off', toggle: true, enabled: notificationsEnabled, onToggle: setNotificationsEnabled },
        { icon: FiSmartphone, label: 'Display', value: 'Adaptive brightness' },
      ]
    },
    {
      title: 'Personal',
      items: [
        { icon: FiUser, label: 'Accounts', value: '3 accounts' },
        { icon: FiLock, label: 'Security & Privacy', value: 'Fingerprint' },
        { icon: FiShield, label: 'Safety & Emergency', value: 'Emergency SOS' },
      ]
    },
    {
      title: 'System',
      items: [
        { icon: FiHelpCircle, label: 'Tips & Support', value: 'Get help' },
      ]
    }
  ];

  return (
    <motion.div 
      className="flex flex-col h-full bg-gray-50 p-4"
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
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your device and app preferences</p>
      </motion.div>

      <div className="flex-1 space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
          >
            <div className="px-4 py-3 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {group.title}
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + groupIndex * 0.1 + itemIndex * 0.05 }}
                >
                  <div className="flex items-center flex-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <SafeIcon icon={item.icon} className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{item.label}</p>
                      <p className="text-gray-500 text-sm">{item.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {item.toggle ? (
                      <motion.button
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                          item.enabled ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        onClick={() => item.onToggle(!item.enabled)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="w-4 h-4 bg-white rounded-full shadow-sm"
                          animate={{ x: item.enabled ? 24 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    ) : (
                      <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Settings;