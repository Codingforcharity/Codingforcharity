SELECT * FROM workingproject
JOIN projects ON projects.projid = workingproject.projectid 
JOIN users ON users.id = projects.posterid AND workingproject.userid = $1;