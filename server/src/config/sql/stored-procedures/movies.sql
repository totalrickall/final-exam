-- -- STORED PROCEDURES
-- READ ALL
drop procedure if exists spReadAllMovies;
delimiter $$
create procedure spReadAllMovies()
begin

select *
from Movies;

end $$
delimiter ;
-- READ
drop procedure if exists spReadMovie;
delimiter $$
create procedure spReadMovie(p_id int)
begin

select *
from Movies
where id = p_id;

end $$
delimiter ;
-- CREATE
drop procedure if exists spCreateMovie;
delimiter $$
create procedure spCreateMovie(p_director varchar(256), p_poster text, p_title varchar(256))
begin

insert into Movies(director, poster, title)
values(p_director, p_poster, p_title);
select last_insert_id() as id;

end $$
delimiter ;
-- DELETE
drop procedure if exists spDeleteMovie;
delimiter $$
create procedure spDeleteMovie(p_id int)
begin

delete from Movies
where id = p_id;

end $$
delimiter ;
-- UPDATE
drop procedure if exists spUpdateMovie;
delimiter $$
create procedure spUpdateMovie(p_id int, p_director varchar(256), p_poster text, p_title varchar(256))
begin

update Movies
set
    director = coalesce(p_director, director),
    poster = coalesce(p_poster, poster),
    title = coalesce(p_title, title)
where id = p_id;

end $$
delimiter ;