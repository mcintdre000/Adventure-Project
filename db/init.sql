<<<<<<< HEAD
drop table if exists users;
create table if not exists users(
    id serial primary key,
    username text unique , 
    firstName text, 
    lastName text, 
    email text, 
    picture text, 
    bio text, 
    city text, 
    state text, 
    birthday text, 
    adventures_completed text, 
    adventure_goals text, 
    adventures text, 
    comments text,
    stamp timestamp
);

Drop table if exists users_list;
CREATE TABLE if not exists users_list(
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password VARCHAR,
  email VARCHAR
);
=======
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


--node-connect-pg-simple table.sql
CREATE TABLE "session" (
  "sid" VARCHAR NOT NULL COLLATE "default",
	"sess" JSON NOT NULL,
	"expire" TIMESTAMP(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
>>>>>>> feature/city-filter
