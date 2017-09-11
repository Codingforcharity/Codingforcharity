UPDATE users SET username = $2, bio = $3, ischarity = $4 WHERE id = $1
RETURNING *;