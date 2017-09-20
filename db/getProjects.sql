SELECT * FROM projects
JOIN users on users.id = projects.posterid
ORDER BY projects.projid desc;