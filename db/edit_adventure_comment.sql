UPDATE comments 
SET content = ${content}
WHERE id = ${id};
SELECT * FROM comments
where hiking_id = ${hikingID}
order by comments.id asc;