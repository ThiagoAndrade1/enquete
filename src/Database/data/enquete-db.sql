Create database enquete;
use enquete;

create table users(
id int auto_increment primary key,
name varchar(50) not null,
age int not null, 
gender varchar(1) not null,
schooling varchar(2) not null,
questionA int not null,
questionB int not null,
questionC int not null,
questionD int not null,
questionE int not null,
questionF int not null,
questionG int not null,
questionH int not null,
questionI int not null,
questionJ int not null
);

insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Maria', 10, 'F', 'EF', 1, 3 ,2 ,4 ,2, 10, 9, 7, 3 ,2);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Joao', 12, 'M', 'EF', 1, 2 ,5 ,1 ,4, 3, 1, 2, 3 ,4);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Alexandre', 13, 'M', 'EF', 4, 4 ,2 ,1 ,3, 9, 3, 1, 5 ,4);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Thiago', 20, 'M', 'ES', 1, 1 ,1 ,1 ,1, 1, 1, 1, 1 ,1);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Juan', 21, 'M', 'ES', 3, 2 ,3 ,4 ,3, 3, 2, 2, 1,1);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Igor', 20, 'M', 'ES', 1, 2 ,2 ,1 ,9, 7, 5, 3, 2 ,9);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Gabriel', 8, 'M', 'EF', 4, 0 ,0 ,2 ,8, 9, 2, 2, 3 ,3);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Joana', 15, 'F', 'EF', 1, 2 ,3 ,4 ,5, 6, 7, 8, 9 ,0);
insert into users(name, age, gender, schooling, questionA, questionB, questionC, questionD, questionE, questionF, questionG, questionH, questionI, questionJ) values ('Mário', 5, 'M', 'EF', 2, 2 ,2 ,2 ,1, 1, 1, 2, 2 ,2);