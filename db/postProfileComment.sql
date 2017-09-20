INSERT INTO user_comments(profileid, posterid, message)
VALUES($1, $3, $2);
SELECT * FROM users
JOIN user_comments ON user_comments.posterid = users.id AND user_comments.profileid = $1;