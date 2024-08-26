import React from 'react';
import Link from 'next/link';
import { Home, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
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