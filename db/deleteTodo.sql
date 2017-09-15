DELETE FROM project_todos WHERE id = $1;
SELECT * FROM project_todos WHERE projectid = $2;