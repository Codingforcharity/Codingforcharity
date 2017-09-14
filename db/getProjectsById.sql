SELECT * FROM projects
JOIN users on users.id = projects.posterid AND projects.id = $1;