import React from 'react';
import { Trash2, ExternalLink, Star, GitFork } from 'lucide-react';

const Favorites = ({ favorites, onDeleteFavorite, isLoading }) => {

  if (isLoading) {
    return (
      <div className="text-center py-10 text-gray-400">
        Loading favorites...
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No favorite repositories yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
      {favorites.map((repo) => (
        <div
          key={repo._id}
          className="border border-gray-700 rounded-md p-4 bg-slate-900 flex flex-col gap-3"
        >
          {/* Repo Name */}
          <div className="flex justify-between items-center">
            <h3 className="text-white font-semibold">{repo.name}</h3>

            <div className="flex gap-2">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>

              <button
                onClick={() => onDeleteFavorite(repo._id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Owner */}
          <p className="text-gray-400 text-sm">@{repo.owner}</p>

          {/* Description */}
          <p className="text-gray-400 text-sm">
            {repo.description || "No description available"}
          </p>

          {/* Stats */}
          <div className="flex gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {repo.stars}
            </div>

            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {repo.forks}
            </div>

            {repo.language && (
              <span className="text-blue-400">{repo.language}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;