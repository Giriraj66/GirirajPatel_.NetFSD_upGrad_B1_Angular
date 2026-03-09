create database schooldbproblem2
use schooldbproblem2

create table departments (
    departmentid int primary key,
    departmentname varchar(100) unique,
    location varchar(100)
);

create table teachers (
    teacherid int primary key,
    teachername varchar(100),
    email varchar(100) unique,
    departmentid int,
    hiredate date,
    foreign key (departmentid) references departments(departmentid)
);

create table students (
    studentid int primary key,
    firstname varchar(50),
    lastname varchar(50),
    dateofbirth date,
    gender char(1) check (gender in ('m','f')),
    departmentid int,
    admissiondate date,
    foreign key (departmentid) references departments(departmentid)
);

create table courses (
    courseid int primary key,
    coursename varchar(100),
    credits int check (credits between 1 and 5),
    departmentid int,
    teacherid int,
    foreign key (departmentid) references departments(departmentid),
    foreign key (teacherid) references teachers(teacherid)
);


create table enrollments (
    enrollmentid int primary key,
    studentid int,
    courseid int,
    enrollmentdate date default getdate(),
    foreign key (studentid) references students(studentid),
    foreign key (courseid) references courses(courseid)
);

create table exams (
    examid int primary key,
    courseid int,
    examdate date,
    examtype varchar(50),
    foreign key (courseid) references courses(courseid)
);

create table marks (
    markid int primary key,
    studentid int,
    examid int,
    marksobtained int check (marksobtained between 0 and 100),
    foreign key (studentid) references students(studentid),
    foreign key (examid) references exams(examid)
);