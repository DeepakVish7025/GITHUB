import React from 'react';
import { Github, Heart, Search } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="w-full border-b bg-slate-900">
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Github className="h-6 w-6" />
          <span>GitFavs</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab('search')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
              activeTab === 'search'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Search className="h-4 w-4" />
            Search
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
              activeTab === 'favorites'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Heart className="h-4 w-4" />
            Favorites
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;