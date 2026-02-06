const Help = require("../models/helpModel");

exports.addHelp = (req, res) => {
  const {
    name,
    phone,
    city,
    help_type,
    category,
    urgency,
    message,
  } = req.body;

  if (!name || !phone || !city || !help_type || !category || !message) {
    return res.status(400).json({ msg: "All required fields must be filled" });
  }

  Help.createHelp(
    { name, phone, city, help_type, category, urgency, message },
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Database error" });
      }
      res.json({ msg: "Community help request saved" });
    }
  );
};

exports.getHelp = (req, res) => {
  Help.getAllHelp((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};



