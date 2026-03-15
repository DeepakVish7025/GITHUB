import React from 'react';
import { Star, GitFork, ExternalLink, Heart } from 'lucide-react';

const RepoCard = ({ repo, onAddFavorite, isFavorite = false }) => {

  const handleAdd = () => {
    onAddFavorite(repo);
  };

  return (
    <div className="border border-gray-700 rounded-md p-4 bg-slate-900 flex flex-col gap-3">

      {/* Repo name */}
      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold text-lg">{repo.name}</h3>

        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
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

      {/* Favorite Button */}
      {!isFavorite && (
        <button
          onClick={handleAdd}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm"
        >
          <Heart className="h-4 w-4" />
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default RepoCard;