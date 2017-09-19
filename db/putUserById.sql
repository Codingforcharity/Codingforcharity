UPDATE users SET bio = $2, profilepic = $3, ischarity = $4, firstname = $5, lastname = $6 WHERE id = $1
RETURNING *;