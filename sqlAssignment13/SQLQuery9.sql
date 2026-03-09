use schooldbproblem2

create view student_department_view
as
select s.studentid,s.firstname + ' ' + s.lastname as studentname,d.departmentname
from students s join departments d
on s.departmentid = d.departmentid;

select * from student_department_view;

create view student_course_view as
select s.firstname + ' ' + s.lastname as studentname,c.course_title,e.enrollmentdate
from students s join enrollments e
on s.studentid = e.studentid
join courses c
on e.courseid = c.courseid;

select * from student_course_view;

create view exam_result_view as
select
s.firstname + ' ' + s.lastname as studentname,c.course_title,ex.examtype,m.marksobtained
from students s join marks m
on s.studentid = m.studentid
join exams ex
on m.examid = ex.examid
join courses c
on ex.courseid = c.courseid;

select * from exam_result_view;

update student_department_view
set studentname = 'raj kumar'
where studentid = 1;

drop view student_department_view;

drop view student_course_view;

drop view exam_result_view;