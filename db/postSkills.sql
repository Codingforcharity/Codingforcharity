INSERT INTO skills (userid, skill, description)
VALUES($1, $2, NULL);
SELECT * FROM users
JOIN skills ON skills.userid = users.id AND skills.userid = $1;