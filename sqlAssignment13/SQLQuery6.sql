use schooldbproblem2

select departmentid, count(studentid) as total_students from students
group by departmentid;

select examid, avg(marksobtained) as avg_marks from marks
group by examid;

select courseid, count(studentid) as total_students from enrollments
group by courseid;

select examid, max(marksobtained) as max_marks from marks
group by examid;

select e.courseid, min(m.marksobtained) as min_marks from marks m join exams e on m.examid = e.examid
group by e.courseid;

select departmentid, count(studentid) as total_students from students
group by departmentid
having count(studentid) > 5;