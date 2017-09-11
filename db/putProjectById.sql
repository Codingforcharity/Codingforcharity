UPDATE projects SET title = $2, description = $3 WHERE id = $1;
SELECT * FROM projects WHERE id = $1;