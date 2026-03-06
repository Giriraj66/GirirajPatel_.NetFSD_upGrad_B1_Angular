
create database store_db
use store_db

CREATE TABLE customers (
    customer_id int primary key,
    first_name nvarchar(50),
    last_name nvarchar(50)
);

CREATE TABLE orders (
    order_id int primary key,
    order_date date,
    order_status int,
    customer_id int,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

insert into customers values
(1, 'John', 'Smith'),
(2, 'Alice', 'Brown'),
(3, 'David', 'Wilson');

insert into orders values
(101, '2025-02-01', 1, 1),
(102, '2025-02-05', 4, 2),
(103, '2025-02-07', 2, 3),
(104, '2025-02-10', 1, 2),
(105, '2025-02-15', 4, 1);

select c.first_name,c.last_name,o.order_id,o.order_date,o.order_status
from customers c INNER JOIN orders o
on c.customer_id = o.customer_id
where o.order_status = 1 OR o.order_status = 4
order by o.order_date desc;