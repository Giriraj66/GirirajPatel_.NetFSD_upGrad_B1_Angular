create database labassignment

CREATE TABLE Worker (

Worker_Id INT PRIMARY KEY IDENTITY(1,1),

First_Name VARCHAR(25),

Last_Name VARCHAR(25),

Salary INT,

Joining_Date DATETIME,

Department CHAR(25)

);

CREATE TABLE Bonus (

Worker_Ref_Id INT,

Bonus_Amount INT,

Bonus_Date DATETIME,

FOREIGN KEY (Worker_Ref_Id)

REFERENCES Worker(Worker_Id)

ON DELETE CASCADE

);


create TABLE Title (
Worker_Ref_Id INT,
Worker_Title CHAR(25),
Affected_From DATETIME,
FOREIGN KEY (Worker_Ref_Id)
REFERENCES Worker(Worker_Id)
ON DELETE CASCADE
);
