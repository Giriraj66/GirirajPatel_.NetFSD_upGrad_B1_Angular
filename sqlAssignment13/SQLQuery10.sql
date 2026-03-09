create index idx_student_lastname
on students(lastname);

create index idx_teacher_email
on teachers(email);

create index idx_enrollment_student_course
on enrollments(studentid, courseid);

create unique index idx_department_name
on departments(departmentname);

drop index idx_student_lastname on students;