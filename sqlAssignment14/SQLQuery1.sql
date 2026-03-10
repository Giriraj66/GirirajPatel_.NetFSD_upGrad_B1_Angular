
create view vw_studentdepartment as
select s.studentid,s.firstname + ' ' + s.lastname as studentname,d.departmentname,s.admissiondate
from students s join departments d
on s.departmentid = d.departmentid;

select * from vw_studentdepartment;

select * from vw_studentdepartment where departmentname = 'cs';

drop view vw_studentdepartment;