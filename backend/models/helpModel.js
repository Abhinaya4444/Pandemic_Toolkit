const db = require("../config/db");

exports.createHelp = (data, callback) => {
  const sql = `
    INSERT INTO community_help
    (name, phone, city, help_type, category, urgency, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.name,
    data.phone,
    data.city,
    data.help_type,
    data.category,
    data.urgency,
    data.message,
  ];

  db.query(sql, values, callback);
};

exports.getAllHelp = (callback) => {
  const sql = "SELECT * FROM community_help ORDER BY created_at DESC";
  db.query(sql, callback);
};
