--1
select First_Name as Worker_name from Worker;
--2
SELECT UPPER(First_Name)  from Worker;
--3
select Distinct Department from Worker;
select SUBSTRING(First_Name,1,3) as Firstthreechars from Worker;

select RTRIM(First_Name) as First_name from Worker;
select LTRIM(Department) as department from Worker;

select distinct(Department),len(Department) as Deptlength from Worker; 

select REPLACE(First_Name,'a','A') as firstname from Worker;

select First_Name +' '+Last_Name as Complete_Name from Worker;

select * from Worker order by First_Name Asc;

select * from Worker order by First_Name asc , Department desc;

select * from Worker where First_Name in('Vipul','Satish');

select * from Worker where First_Name not in('Vipul','Satish');

select 
