SELECT * FROM projects
JOIN users ON users.id = projects.posterid AND projects.projid = $1;