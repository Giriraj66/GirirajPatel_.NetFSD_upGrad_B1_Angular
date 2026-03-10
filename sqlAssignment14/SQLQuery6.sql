create procedure sp_getstudentsbydepartment
@departmentid int
as
begin
    select
        studentid,
        firstname + ' ' + lastname as studentname,
        admissiondate
    from students
    where departmentid = @departmentid;
end;

exec sp_getstudentsbydepartment 2;

exec sp_getstudentsbydepartment 3;

create procedure sp_enrollstudents
@enrollmentid int,
@studentid int,
@courseid int
as
begin
    insert into enrollments (enrollmentid, studentid, courseid, enrollmentdate)
    values (@enrollmentid, @studentid, @courseid, getdate());
end;

exec sp_enrollstudents 31, 5, 2;

create procedure sp_getstudentmarks
@studentid int
as
begin
    select
        s.firstname + ' ' + s.lastname as studentname,
        c.course_title,e.examtype,m.marksobtained
    from students s join marks m
        on s.studentid = m.studentid
    join exams e
        on m.examid = e.examid
    join courses c
        on e.courseid = c.courseid
    where s.studentid = @studentid;
end;

exec sp_getstudentmarks 5;


create procedure sp_updatemarks @markid int,@newmarks int
as
begin
    update marks set marksobtained = @newmarks
    where markid = @markid;
    select * from marks where markid = @markid;
end;

exec sp_updatemarks 5, 85;


create procedure sp_deleteenrollment @enrollmentid int
as
begin
    delete from enrollments where enrollmentid = @enrollmentid;
end;

exec sp_deleteenrollment 10;