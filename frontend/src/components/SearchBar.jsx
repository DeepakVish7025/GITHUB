import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="flex gap-2">

        <div className="flex items-center border border-gray-700 rounded-md px-3 flex-1 bg-slate-900">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GitHub repositories..."
            className="w-full bg-transparent py-2 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Search"
          )}
        </button>

      </form>
    </div>
  );
};

export default SearchBar;