SELECT * FROM project_replies
JOIN users ON users.id = project_replies.replyuserid AND messageid = $1;