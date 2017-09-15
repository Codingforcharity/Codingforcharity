SELECT * FROM project_comments
JOIN project_replies on project_replies.messageid = project_comments.id AND project_comments.projectid = $1;