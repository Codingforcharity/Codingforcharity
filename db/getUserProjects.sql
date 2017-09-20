SELECT * FROM workingproject
JOIN projects ON projects.id = workingproject.projectid AND workingproject.userid = $1;