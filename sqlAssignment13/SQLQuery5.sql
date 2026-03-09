use schooldbproblem2

select * from students
where departmentid = ( select departmentid from departments where departmentname = 'cs');


select * from teachers where hiredate > '2022-01-01';

select * from students where firstname like 'a%';

select * from courses where credits > 3;

select * from students where dateofbirth between '2005-01-01' and '2008-12-31';

select * from students where departmentid <> 
(select departmentid from departments where departmentname = 'mech');

select * from teachers where salary between 40000 and 70000;

select * from courses where teacherid <> 3;