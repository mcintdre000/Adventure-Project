select comments.*, users.username, users.picture from users
join comments on users.id = users_id
where hiking_id = ${hiking_id}
order by comments.id asc;