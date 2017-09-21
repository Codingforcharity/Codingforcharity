SELECT * FROM workingproject
JOIN projects ON projects.projid = workingproject.projectid AND workingproject.userid = $1;