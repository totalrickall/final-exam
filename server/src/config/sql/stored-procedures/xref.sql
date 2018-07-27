-- -- MOVIES ACTORS XREF PROCEDURES
-- READ ALL XREF
drop procedure if exists spReadAllMoviesActorsXref;
delimiter $$
create procedure spReadAllMoviesActorsXref()
begin

select ma.actorid, ma.movieid, a.name, m.title
from MoviesActors ma
join Actors a
on ma.actorid = a.id
join Movies m
on ma.movieid = m.id;

end $$
delimiter ;
-- READ XREF BASED ON MOVIED
drop procedure if exists spReadMovieActorXref;
delimiter $$
create procedure spReadMovieActorXref(p_movieid int)
begin

select ma.actorid, ma.movieid, a.name, m.title
from MoviesActors ma
join Actors a
on ma.actorid = a.id
join Movies m
on ma.movieid = m.id
where ma.movieid = p_movieid;

end $$
delimiter ;