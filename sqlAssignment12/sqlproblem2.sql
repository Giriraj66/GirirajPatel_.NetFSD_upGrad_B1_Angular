create database product_list
use product_list

create table brands (
    brand_id int primary key,
    brand_name varchar(50)
);

create table categories (
    category_id int primary key,
    category_name nvarchar(50)
);


create table products (
    product_id int primary key,
    product_name varchar(100),
    brand_id int,
    category_id int,
    model_year int,
    list_price decimal(10,2),
    foreign key (brand_id) references brands(brand_id),
    foreign key (category_id) references categories(category_id)
);

insert into brands 
values(1,'nike'),
(2,'adidas'),
(3,'puma');

insert into categories 
values(1,'shoes'),
(2,'clothing'),
(3,'accessories');

insert into products values
(101,'running shoes',1,1,2023,800),
(102,'sports t-shirt',2,2,2022,450),
(103,'training shoes',3,1,2023,650),
(104,'cap',2,3,2024,300),
(105,'football shoes',1,1,2024,900);


select p.product_name,b.brand_name,c.category_name,p.model_year,p.list_price
from products p inner join brands b
on p.brand_id = b.brand_id inner join categories c
on p.category_id = c.category_id
where p.list_price > 500
order by p.list_price asc;