const db = require("../config/db");

// submit story
exports.addStory = (req, res) => {
  const { name, city, message } = req.body;

  const sql =
    "INSERT INTO community_stories (name, city, message) VALUES (?, ?, ?)";

  db.query(sql, [name, city, message], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Story submitted for review" });
  });
};

// get approved stories
exports.getStories = (req, res) => {
  const sql =
    "SELECT name, city, message FROM community_stories WHERE approved = true ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
