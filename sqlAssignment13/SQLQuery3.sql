use schooldbproblem2

--1st
alter table students add phonenumber varchar(15);

--2nd
alter table teachers add salary int;

--3rd
alter table teachers alter column salary decimal(10,2);

--4th
alter table teachers add constraint chk_salary check (salary > 20000);

--5th
alter table students drop column phonenumber;

--6th
exec sp_rename 'courses.coursename', 'course_title', 'column';
