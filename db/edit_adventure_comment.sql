UPDATE comments 
SET content = ${content}
WHERE id = ${id};
SELECT comments.*, users.username, users.picture from users
join comments on users.id = users_id
where hiking_id = ${hikingID}
order by comments.id asc;