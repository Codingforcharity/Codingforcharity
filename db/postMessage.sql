INSERT INTO messages (message, userid, chatroomid, newdate)
VALUES($1, $2, $3, $4)
RETURNING *;