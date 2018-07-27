-- -- STORED PROCEDURES
-- READ ALL
drop procedure if exists spReadAllActors;
delimiter $$
create procedure spReadAllActors()
begin

select *
from Actors;

end $$
delimiter ;
-- READ
drop procedure if exists spReadActor;
delimiter $$
create procedure spReadActor(p_id int)
begin

select *
from Actors
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateActor;
delimiter $$
create procedure spCreateActor(p_name varchar(256))
begin

insert into Actors(name)
values(p_name);
select last_insert_id() as id;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDeleteActor;
delimiter $$
create procedure spDeleteActor(p_id int)
begin

delete from Actors
where id = p_id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdateActor;
delimiter $$
create procedure spUpdateActor(p_id int, p_name varchar(256))
begin

update Actors
set
    name = coalesce(p_name, name)
where id = p_id;

end $$
delimiter ;