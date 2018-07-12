DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE , 
    firstName TEXT, 
    lastName TEXT, 
    email TEXT, 
    picture TEXT, 
    bio TEXT, 
    city TEXT, 
    state TEXT, 
    birthday TEXT, 
    adventures_completed TEXT, 
    adventure_goals TEXT, 
    adventures TEXT, 
    comments TEXT,
    stamp TIMESTAMP
);

drop table if exists comments;
create table if not exists comments (
  id serial primary key,
  content text,
  created timestamp,
  hiking_id text,
  hiking_name text,
  users_id int references users (id)
); 

insert into comments (content, created, hiking_id, hiking_name, users_id) values 
('content is here', now(), '7013827', 'Hiking trail name', 2)

--node-connect-pg-simple table.sql
CREATE TABLE "session" (
  "sid" VARCHAR NOT NULL COLLATE "default",
	"sess" JSON NOT NULL,
	"expire" TIMESTAMP(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
