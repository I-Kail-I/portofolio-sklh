const db = require("../config/db");

const getTestimonials = (callback) => {
  const query = "SELECT * FROM testimonials ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  getTestimonials,
};
