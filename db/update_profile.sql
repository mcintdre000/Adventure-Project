update users
set username =$1, 
firstName = $2 , 
lastName = $3 , 
email = $4, 
picture = $5, 
bio =$6, 
city =$7, 
state =$8, 
birthday =$9, 
adventures =$12, 
comments =$13, 
stamp =$14
where  id = $15;
select * from users where id = $15;