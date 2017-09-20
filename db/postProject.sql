INSERT INTO projects (posterid, title, description, skills)
VALUES($1, $2, $3, $4)
RETURNING *;