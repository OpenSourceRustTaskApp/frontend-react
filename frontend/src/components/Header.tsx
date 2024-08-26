import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  // This would typically come from your auth context or state management
  const user = {
    name: 'John Doe',
    image: '/images/boy.png'
  };

  return (
    <header className="bg-gray-600 text-white h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-white hover:text-gray-300 focus:outline-none">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold ml-4">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 focus:outline-none">
          <Bell size={20} />
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
            {user.image ? (
              <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
            ) : (
              <User size={20} />
            )}
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;