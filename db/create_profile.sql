insert into users(username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
-- values (${username}, ${firstName}, ${lastName}, ${email}, ${picture}, ${bio}, ${city}, ${state}, ${birthday}, ${adventures_completed}, ${adventure_goals}, ${adventures}, ${comments}, ${stamp})
returning *;