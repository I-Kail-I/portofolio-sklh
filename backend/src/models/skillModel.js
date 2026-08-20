const db = require("../config/db");

const getSkillGroups = (callback) => {
  const groupsQuery = "SELECT * FROM skill_groups ORDER BY id ASC";
  db.query(groupsQuery, (err, groups) => {
    if (err) {
      return callback(err);
    }

    const skillsQuery = "SELECT * FROM skills ORDER BY id ASC";
    db.query(skillsQuery, (err2, skills) => {
      if (err2) {
        return callback(err2);
      }

      const result = groups.map((group) => ({
        ...group,
        skills: skills.filter((skill) => skill.skill_group_id === group.id),
      }));

      callback(null, result);
    });
  });
};

module.exports = {
  getSkillGroups,
};
