SELECT * FROM user_replies
JOIN users ON users.id = user_replies.posterid AND user_replies.commentid = $1;