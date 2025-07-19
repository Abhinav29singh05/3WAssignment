const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Claim random points for a user
exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId is required' });

    // Find user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Generate random points (1-10)
    const points = Math.floor(Math.random() * 10) + 1;

    // Update user points
    user.totalPoints += points;
    await user.save();

    // Add to claim history
    const claim = new ClaimHistory({ userId, pointsClaimed: points });
    await claim.save();

    res.json({ user, claim });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 