const Favorite = require('../models/Favorite');

exports.postFavorites = async (req, res) => {
  const { repoId, name, fullName, owner, url } = req.body;

  if (!repoId || !name || !fullName || !owner || !url) {
    return res.status(400).json({ 
      success: false, 
      message: "Required fields missing: repoId, name, fullName, owner, url" 
    });
  }

  try {
    const existing = await Favorite.findOne({ repoId });

    if (existing) {
      return res.status(409).json({ 
        success: false, 
        message: "Repository is already in favorites" 
      });
    }

    const favorite = await Favorite.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Repository added to favorites',
      favorite
    });

  } catch (error) {
    console.log("Save favorite error:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error while saving favorite" 
    });
  }
};
