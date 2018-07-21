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
adventures =$10, 
comments =$11, 
stamp =$12
where  id = $13;
select * from users where id = $13;