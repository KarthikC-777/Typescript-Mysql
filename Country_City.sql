select * from training_demo.city;
CREATE TABLE training_demo.country (
    country_id INT NOT NULL PRIMARY KEY,
    country_name VARCHAR(45) NOT NULL
);
select * from training_demo.country;
alter table training_demo.city
drop country_id;
select * from training_demo.city;
alter table training_demo.city
add foreign key(country_id) references training_demo.country(country_id);
use training_demo;
desc country;
insert into country(country_id,country_name) value(1,'India');
select * from country;
insert into country
values (2,'Australia');
insert into country(country_id,country_name)
values(3,'SriLanka'),(4,'Pakistan'),(5,'newzeland');
select * from country;
delete from country where country_id=6;
desc city;
insert into city(id,name,country_id)
values(101,'abc',1),(102,'bcd',2),(103,'cde',3);
select * from city;
show tables;


