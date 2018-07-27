-- -- TABLES
-- Movies
drop tables if exists Movies;
create table Movies(
    id int not null auto_increment primary key,
    title varchar(256) not null,
    director varchar(256) not null,
    poster text not null
);
-- Actors
drop table if exists Actors;
create table Actors(
    id int not null auto_increment primary key,
    name varchar(256) not null
);
-- Movies / Actors Xref
drop table if exists MoviesActors;
create table MoviesActors(
    actorid int not null,
    movieid int not null
);

-- -- FOREIGN KEYS
-- fk for actorid on MoviesActors table
alter table MoviesActors
add constraint fk_actoridXref
foreign key (actorid)
references Actors(id);
-- fk for movieid on MoviesActors table
alter table MoviesActors
add constraint fk_movieidXref
foreign key (movieid)
references Movies(id);