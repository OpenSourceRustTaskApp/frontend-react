import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Settings, HelpCircle, User } from 'lucide-react';

const Sidebar = () => {
  // This would typically come from your auth context or state management
  const user = {
    name: 'John Doe',
    image: '/images/boy.png'
  };

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            {user.image ? (
              <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
            ) : (
              <User size={24} />
            )}
          </div>
          <div className="ml-3">
            <p className="font-semibold">{user.name}</p>
          </div>
        </div>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/help" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <HelpCircle size={20} />
              <span>Help</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;