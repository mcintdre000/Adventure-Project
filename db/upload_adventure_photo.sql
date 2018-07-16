insert into adventures (adventurename, adventureid, photo)
values (${adventurename}, ${adventureid}, ${photo});
select * from adventures
where adventureid = ${adventureid};