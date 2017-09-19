SELECT * FROM users
JOIN user_comments ON user_comments.posterid = users.id AND user_comments.profileid = $1;