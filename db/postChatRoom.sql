INSERT INTO chatrooms (name, userid)
VALUES($1, $2)
RETURNING *;