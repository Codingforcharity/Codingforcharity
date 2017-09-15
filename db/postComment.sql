INSERT INTO project_comments (message, userid, projectid)
VALUES($2, $3, $1);
SELECT * FROM project_comments
JOIN users on users.id = project_comments.userid AND project_comments.projectid = $1;
