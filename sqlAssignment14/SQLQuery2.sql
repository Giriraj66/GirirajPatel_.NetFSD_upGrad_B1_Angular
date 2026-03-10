create view vw_studentcourses as
select s.studentid,s.firstname + ' ' + s.lastname as studentname,c.course_title,e.enrollmentdate
from students s join enrollments e
on s.studentid = e.studentid
join courses c
on e.courseid = c.courseid;

select * from vw_studentcourses where studentid = 5;

select studentname, count(course_title) as total_courses
from vw_studentcourses
group by studentname;

select * from vw_studentcourses where enrollmentdate > '2024-01-01';