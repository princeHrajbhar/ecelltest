"use client"; // Marking this file as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaHome, FaCalendarAlt, FaUser, FaEnvelope, FaCertificate, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { MenuItem } from '@/lib/types/MenuItem'; // Importing MenuItem type

// Menu items with icon and path
const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: <FaHome />, path: '/' },
  { name: 'Event', icon: <FaCalendarAlt />, path: '/event' },
  { name: 'Member', icon: <FaUser />, path: '/members' },
  { name: 'Blast Message', icon: <FaEnvelope />, path: '/blast-message' },
  { name: 'Certification', icon: <FaCertificate />, path: '/certification' },
  { name: 'Profile', icon: <FaUserCircle />, path: '/profile' },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(menuItems[0].name);

  const handleMenuClick = (item: MenuItem) => {
    setActive(item.name);
    router.push(item.path);
  };

  return (
    <nav className="h-screen w-1/5 bg-gray-800 text-white p-4 flex flex-col justify-between">
      <div>
        {/* Logo and title: Show logo on small screens, hide the text */}
        <div className="flex items-center mb-4">
          <Image src="/logo.png" alt="App Logo" className="h-12 mx-auto" width={48} height={48} />
          <span className="text-xl font-semibold hidden sm:block">E-Cell SRMUH</span> {/* Hide title on small screens */}
        </div>
        
        {/* Menu items */}
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                active === item.name
                  ? 'bg-gray-700 text-yellow-500'
                  : 'hover:bg-gray-700 hover:text-yellow-500'
              }`}
              onClick={() => handleMenuClick(item)}
            >
              {/* Directly rendering the icon, and passing className to it */}
              {React.cloneElement(item.icon as React.ReactElement, { className: 'h-5 w-5' })}
              <span className="ml-2 text-lg hidden sm:block">{item.name}</span> {/* Hide text on small screens */}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-auto">
        <span className="text-sm hidden sm:block">© 2024 E-Cell SRMUH</span> {/* Hide footer text on small screens */}
      </div>
    </nav>
  );
};

export default Sidebar;
