use schooldbproblem2

select s.studentid, s.firstname, s.lastname, d.departmentname from students s join departments d
on s.departmentid = d.departmentid;

select c.courseid, c.course_title, t.teachername from courses c join teachers t
on c.teacherid = t.teacherid;

select s.firstname, s.lastname, c.course_title from students s join enrollments e
on s.studentid = e.studentid join courses c
on e.courseid = c.courseid;

select s.firstname, s.lastname, e.examid, m.marksobtained from students s
join marks m on s.studentid = m.studentid
join exams e on m.examid = e.examid;

select c.courseid, c.course_title, t.teachername
from courses c left join teachers t on c.teacherid = t.teacherid;

select t.teacherid, t.teachername from teachers t left join courses c on t.teacherid = c.teacherid
where c.teacherid is null;