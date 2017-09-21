INSERT INTO skills (userid, skill)
VALUES($1, $2);
SELECT * FROM users
JOIN skills ON skills.userid = users.id AND skills.userid = $1;