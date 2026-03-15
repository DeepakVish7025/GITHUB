const Favorite = require('../models/Favorite');

exports.deleteFavorite = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Favorite.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ 
        success: false, 
        message: "Favorite not found with the given id" 
      });
    }

    res.status(200).json({ 
      success: true,
      message: `Repository "${deleted.fullName}" removed from favorites`,
      deleted 
    });

  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid id format'
      });
    }
    console.log("Delete favorite error:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error while deleting favorite" 
    });
  }
};
