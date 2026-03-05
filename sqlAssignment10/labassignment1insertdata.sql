select * from Worker;

insert into Worker(First_Name,Last_Name,Salary,Joining_Date,Department)
values('Monika','Arora',100000,'2014-02-20','HR');

insert into Worker(First_Name,Last_Name,Salary,Joining_Date,Department)
values('Niharika','Verma',80000,'2014-02-20 09:00:00','Admin');

insert into Worker(First_Name,Last_Name,Salary,Joining_Date,Department)
values('Vishal','Singhal',300000,'2014-02-20 09:00:00','HR'),
	  ('Amitabh','Singh',500000,'2014-02-20 09:00:00','Admin'),
	  ('Vivek','Bhati',500000,'2014-06-11 09:00:00','Admin'),
		  ('Vipul','Diwan',200000,'2014-06-11 09:00:00','Account'),
	  ('Satish','Kumar',75000,'2014-01-20 09:00:00','Account'),
	  	  ('Geetika','Chauhan',90000,'2014-04-11 09:00:00','Admin');

select * from Bonus;
		  insert into Bonus(Worker_Ref_Id,Bonus_Date,Bonus_Amount)
		  values(1,'2016-02-20',5000),
				(2,'2016-06-11',3000),
				(3,'2016-02-20',4000),
				(1,'2016-02-20',4500),
				(2,'2016-06-11',3500);

select * from Title;
		insert into Title(Worker_Ref_Id,Worker_Title,Affected_From)
		values(1,'Manager','2016-02-20'),
			  (2,'Executive','2016-06-11'),
			  (8,'Ececutive','2016-06-11'),
			  (5,'Manager','2016-06-11'),
			  (4,'Asst.Manager','2016-06-11'),
			  (7,'Executive','2016-06-11'),
			  (6,'Lead','2016-06-11'),
			  (3,'Lead','2016-06-11');