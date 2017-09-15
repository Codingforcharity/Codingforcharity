INSERT INTO project_links (linkname, link, projectid)
VALUES($2, $3, $1);
SELECT * FROM project_links WHERE projectid = $1;