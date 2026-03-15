import React from 'react';
import { Github, Star, GitFork } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-slate-950 py-16 border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h1 className="text-4xl font-bold text-white">
          Find and Save Your Favorite GitHub Repositories
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Search GitHub repositories and save the ones you like.
          A simple way to manage useful projects for developers.
        </p>

        <div className="mt-8 flex justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>Star tracking</span>
          </div>

          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>Fork info</span>
          </div>

          <div className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>GitHub API</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;