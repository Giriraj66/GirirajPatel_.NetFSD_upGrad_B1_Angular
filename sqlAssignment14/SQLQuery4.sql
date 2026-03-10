create view vw_departmentstudentcount as
select d.departmentname,count(s.studentid) as totalstudents
from departments d left join students s
on d.departmentid = s.departmentid
group by d.departmentname;

select * from vw_departmentstudentcount
where totalstudents > 1;

select * from vw_departmentstudentcount
order by totalstudents desc;