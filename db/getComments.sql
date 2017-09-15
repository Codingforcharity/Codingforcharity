SELECT * FROM project_comments
JOIN users on users.id = project_comments.userid AND project_comments.projectid = $1