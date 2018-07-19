UPDATE users
SET
adventures_completed = $2::JSONb[], 
adventure_goals = $3::JSONb[]
WHERE  id = $1;
SELECT * FROM users WHERE id = $1;