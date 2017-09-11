INSERT INTO users (authid, email, username, bio, profilepic, ischarity)
VALUES($1, $2, $3, $4, $5, $6);
SELECT * FROM users WHERE authid = $1;