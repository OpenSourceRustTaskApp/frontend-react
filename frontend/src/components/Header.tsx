import React, { useState } from 'react';
import { Menu, Bell, User, ChevronDown, Settings, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <header className="bg-gray-900 text-white h-16 flex items-center justify-between px-4">
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
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
              <User size={20} />
            </div>
            <div className="ml-2 flex items-center">
              <p className="text-sm font-semibold">John Doe</p>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <Settings size={16} className="mr-2" />
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;