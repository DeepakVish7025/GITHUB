import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import RepoCard from "./components/RepoCard";
import Favorites from "./components/Favorites";

const API_BASE_URL = "https://github-duhi.onrender.com/api";

function App() {
  const [activeTab, setActiveTab] = useState("search");
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingFavs, setIsLoadingFavs] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFavorites();
  }, [activeTab]);

  const fetchFavorites = async () => {
    setIsLoadingFavs(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/favorites`);
      if (res.data.success) {
        setFavorites(res.data.favorites);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingFavs(false);
    }
  };

  const handleSearch = async (query) => {
    setIsSearching(true);
    setError("");
    try {
      const res = await axios.get(`${API_BASE_URL}/search`, {
        params: { query },
      });

      if (res.data.success) {
        setRepos(res.data.repos);
      }
    } catch (err) {
      setError("Error searching repositories");
      setRepos([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddFavorite = async (repo) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/favorites`, repo);
      if (res.data.success) {
        setFavorites([res.data.favorite, ...favorites]);
        return true;
      }
    } catch (err) {
      if (err.response?.status === 409) return true;
    }
    return false;
  };

  const handleDeleteFavorite = async (id) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/favorites/${id}`);
      if (res.data.success) {
        setFavorites(favorites.filter((fav) => fav._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4">

        {activeTab === "search" ? (
          <>
            <Hero />
            <SearchBar onSearch={handleSearch} isLoading={isSearching} />

            {error && (
              <p className="text-red-400 text-center mt-4">{error}</p>
            )}

            {repos.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {repos.map((repo) => (
                  <RepoCard
                    key={repo.repoId}
                    repo={repo}
                    onAddFavorite={handleAddFavorite}
                    isFavorite={favorites.some(
                      (f) => f.repoId === repo.repoId
                    )}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Favorites</h2>
            <Favorites
              favorites={favorites}
              onDeleteFavorite={handleDeleteFavorite}
              isLoading={isLoadingFavs}
            />
          </div>
        )}
      </main>

      <footer className="text-center text-gray-500 text-sm py-6">
        Made for developers ❤️
      </footer>
    </div>
  );
}

export default App;