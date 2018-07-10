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