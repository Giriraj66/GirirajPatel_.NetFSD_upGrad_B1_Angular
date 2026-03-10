create procedure sp_insertstudents
@studentid int,
@firstname varchar(50),
@lastname varchar(50),
@gender char(1),
@departmentid int,
@admissiondate date
as
begin
    insert into students
    (studentid, firstname, lastname, gender, departmentid, admissiondate)
    values
    (@studentid, @firstname, @lastname, @gender, @departmentid, @admissiondate);
end;

exec sp_insertstudents 21,'amit', 'kumar', 'm', 1, '2024-06-01';
select *from students;