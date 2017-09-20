SELECT * FROM users
JOIN projects ON projects.posterid = users.id AND projects.posterid = $1;