create database stocksDb

use stocksDb

create table products (
    product_id int primary key,
    product_name varchar(100)
);

create table stores (
    store_id int primary key,
    store_name varchar(100)
);

create table stocks (
    store_id int,
    product_id int,
    quantity int,
    primary key (store_id, product_id),
    foreign key (store_id) references stores(store_id),
    foreign key (product_id) references products(product_id)
);

create table order_items (
    item_id int primary key,
    product_id int,
    quantity int
);

insert into products 
values(1,'mountain bike'),
(2,'road bike'),
(3,'helmet');

insert into stores 
values(1,'central store'),
(2,'city store');

insert into stocks 
values(1,1,20),
(1,2,15),
(2,1,10),
(2,3,25);

insert into order_items 
values(1,1,3),
(2,1,2),
(3,2,4);


select p.product_name,s.store_name,st.quantity as available_stock,sum(oi.quantity) as total_quantity_sold
from stocks st inner join products p
on st.product_id = p.product_id
inner join stores s
on st.store_id = s.store_id
left join order_items oi
on st.product_id = oi.product_id
group by p.product_name,s.store_name,st.quantity
order by p.product_name;