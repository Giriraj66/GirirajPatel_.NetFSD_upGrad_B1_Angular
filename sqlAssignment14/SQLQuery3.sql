create view vw_examresults as
select s.studentid,s.firstname + ' ' + s.lastname as studentname,c.course_title,e.examtype,m.marksobtained
from students s join marks m
on s.studentid = m.studentid
join exams e
on m.examid = e.examid
join courses c
on e.courseid = c.courseid;

select * from vw_examresults where marksobtained > 80;

select * from vw_examresults
where marksobtained in
(select max(marksobtained) from vw_examresults
  group by examtype);

  select * from vw_examresults where marksobtained < 40;
