INSERT INTO user_replies(posterid, message, commentid)
VALUES($3,$2,$1);
SELECT * FROM users
JOIN user_comments ON user_comments.posterid = users.id AND user_comments.profileid = $4;