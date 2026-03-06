create database salesDb
use salesDb

create table stores (
    store_id int primary key,
    store_name nvarchar(50)
);

create table orders (
    order_id int primary key,
    store_id int,
    order_status int,
    foreign key (store_id) references stores(store_id)
);

create table order_items (
    item_id int primary key,
    order_id int,
    quantity int,
    list_price decimal(10,2),
    discount decimal(4,2),
    foreign key (order_id) references orders(order_id)
);

insert into stores 
values(1,'central store'),
(2,'city store'),
(3,'town store');

insert into orders 
values(101,1,4),
(102,2,4),
(103,1,2),
(104,3,4);

insert into order_items 
values(1,101,2,500,0.10),
(2,101,1,700,0.05),
(3,102,3,400,0.00),
(4,104,2,600,0.20);

select s.store_name,sum(oi.quantity * oi.list_price * (1 - oi.discount)) as total_sales
from stores s inner join orders o
on s.store_id = o.store_id
inner join order_items oi
on o.order_id = oi.order_id
where o.order_status = 4
group by s.store_name
order by total_sales desc;