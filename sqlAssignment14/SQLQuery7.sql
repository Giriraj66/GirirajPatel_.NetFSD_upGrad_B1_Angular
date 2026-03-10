
create function fn_getgrade
(
    @marksobtained int
)
returns varchar(10)
as
begin
    declare @grade varchar(10)

    if @marksobtained >= 90
        set @grade = 'a'
    else if @marksobtained >= 75
        set @grade = 'b'
    else if @marksobtained >= 60
        set @grade = 'c'
    else
        set @grade = 'fail'

    return @grade
end


select s.firstname + ' ' + s.lastname as studentname,c.course_title,e.examtype,m.marksobtained,
dbo.fn_getgrade(m.marksobtained) as grade
from students s join marks m
on s.studentid = m.studentid
join exams e
on m.examid = e.examid
join courses c
on e.courseid = c.courseid

create function fn_getstudentage
(
@dateofbirth date
)
returns int
as
begin
    declare @age int
    set @age = year(getdate()) - year(@dateofbirth)
    return @age
end

select studentid,firstname,lastname,
dbo.fn_getstudentage(dateofbirth) as age
from students

create function fn_gettotalmarks
(
@studentid int
)
returns int
as
begin
    declare @totalmarks int

    select @totalmarks = sum(marksobtained)
    from marks
    where studentid = @studentid

    return @totalmarks
end

select studentid,dbo.fn_gettotalmarks(studentid) as totalmarks
from students

create function fn_getstudentcourses
(
@studentid int
)
returns table
as
return
(
    select c.course_title,e.enrollmentdate
    from enrollments e join courses c
    on e.courseid = c.courseid
    where e.studentid = @studentid
)

select * from fn_getstudentcourses(5)

create function fn_getdepartmentstudents
(
@departmentid int
)
returns table
as
return
(
    select studentid,firstname + ' ' + lastname as studentname,admissiondate
    from students where departmentid = @departmentid
)

select *from fn_getdepartmentstudents(2)

select *from fn_getdepartmentstudents(3)