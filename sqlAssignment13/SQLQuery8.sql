select studentid, marksobtained from marks
where marksobtained > (select avg(marksobtained) from marks);

select * from courses
where credits >= all (select credits from courses );

select studentid from enrollments
group by studentid
having count(courseid) > 2;


select * from teachers
where departmentid =
( select departmentid from teachers where teachername = 'raj' );

select studentid, examid, marksobtained from marks
where marksobtained >= any
(select max(marksobtained) from marks group by examid);

select departmentid, count(studentid) as total_students from students
group by departmentid
having count(studentid) =
(select max(student_count) from
    (select count(studentid) as student_count from students
        group by departmentid
    ) as temp
);