const Favorite = require('../models/Favorite');

exports.getfavorite = async (req, res) => {
  try {
    const favorites = await Favorite.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: favorites.length,
      favorites
    });

  } catch (error) {
    console.log("Get favorites error:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error while fetching favorites" 
    });
  }
};
