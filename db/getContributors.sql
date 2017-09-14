SELECT * FROM workingproject
JOIN users on users.id = workingproject.userid AND  workingproject.projectid = $1;