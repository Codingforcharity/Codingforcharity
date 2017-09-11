INSERT INTO projects (posterid, title, description)
VALUES($1, $2, $3)
RETURNING *;