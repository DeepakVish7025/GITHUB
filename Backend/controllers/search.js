const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const Favorite = require('../models/Favorite');

exports.searchRepos = async (req, res) => {
  const query = req.query.query;

  if (!query || query.trim() === '') {
    return res.status(400).json({ 
      success: false, 
      message: "Query is required" 
    });
  }

  try {
    const headers = { 'Accept': 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=10`;

    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: 'GitHub API error'
      });
    }

    const data = await response.json();

    const repos = data.items.map((repo) => ({
      repoId: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      owner: repo.owner.login,
      ownerAvatar: repo.owner.avatar_url,
      description: repo.description || '',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || null,
      url: repo.html_url,
    }));

    res.status(200).json({
      success: true,
      totalCount: data.total_count,
      count: repos.length,
      repos,
    });

  } catch (error) {
    console.log("Search error:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error while searching GitHub" 
    });
  }
};
