06-12-2024 friday 

2. Exercises on Joins and Correlation:


........................................................................
a. Find out the products, which have been sold to 'Ivan Bayross'.
........................................................................

--------ANSI style
==> 
select name ,description
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no
inner join client_master cm
where cm.name = 'Ivan Bayross';

+--------------+--------------+
| name         | description  |
+--------------+--------------+
| Ivan Bayross | T-Shirts     |
| Ivan Bayross | T-Shirts     |
| Ivan Bayross | T-Shirts     |
| Ivan Bayross | T-Shirts     |
| Ivan Bayross | Shirts       |
| Ivan Bayross | Cotton Jeans |
| Ivan Bayross | Trousers     |
| Ivan Bayross | Pull Overs   |
| Ivan Bayross | Pull Overs   |
| Ivan Bayross | Denim Shirts |
| Ivan Bayross | Denim Shirts |
| Ivan Bayross | Lycra Tops   |
| Ivan Bayross | Skirts       |
+--------------+--------------+
13 rows in set (0.00 sec)

-- THETA style
==>
select name ,description
from product_master , client_master 
where client_master.name = 'Ivan Bayross';

+--------------+--------------+
| name         | description  |
+--------------+--------------+
| Ivan Bayross | T-Shirts     |
| Ivan Bayross | Shirts       |
| Ivan Bayross | Cotton Jeans |
| Ivan Bayross | Jeans        |
| Ivan Bayross | Trousers     |
| Ivan Bayross | Pull Overs   |
| Ivan Bayross | Denim Shirts |
| Ivan Bayross | Lycra Tops   |
| Ivan Bayross | Skirts       |
+--------------+--------------+
9 rows in set (0.00 sec)


........................................................................
b. Find out the products and their quantities that will have to be delivered in the current month.
........................................................................ 

--------ANSI style
==>
select  description, qty_ordered , order_date
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no
inner join sales_order so on so.order_no =  sod.order_no
where order_date like ('%06%');

+--------------+-------------+------------+
| description  | qty_ordered | order_date |
+--------------+-------------+------------+
| T-Shirts     |           4 | 2004-06-12 |
| Denim Shirts |           2 | 2004-06-12 |
| Pull Overs   |           2 | 2004-06-12 |
| T-Shirts     |          10 | 2004-06-25 |
+--------------+-------------+------------+
4 rows in set (0.00 sec)

-- THETA style
==> 

select  description, qty_ordered , order_date
from product_master pm ,sales_order_details sod , sales_order so
where  sod.product_no = pm.product_no
and   so.order_no = sod.order_no
and order_date like '%06%';

+--------------+-------------+------------+
| description  | qty_ordered | order_date |
+--------------+-------------+------------+
| T-Shirts     |           4 | 2004-06-12 |
| Denim Shirts |           2 | 2004-06-12 |
| Pull Overs   |           2 | 2004-06-12 |
| T-Shirts     |          10 | 2004-06-25 |
+--------------+-------------+------------+
4 rows in set (0.00 sec)



........................................................................
c. List the ProductNo and description of constantly sold (i.e. rapidly moving) products.
........................................................................

--------ANSI style
==>
select sod.product_no ,description
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no;

+------------+--------------+
| product_no | description  |
+------------+--------------+
| P00001     | T-Shirts     |
| P00001     | T-Shirts     |
| P00001     | T-Shirts     |
| P00001     | T-Shirts     |
| P0345      | Shirts       |
| P06734     | Cotton Jeans |
| P07868     | Trousers     |
| P07885     | Pull Overs   |
| P07885     | Pull Overs   |
| P07965     | Denim Shirts |
| P07965     | Denim Shirts |
| P07975     | Lycra Tops   |
| P08865     | Skirts       |
+------------+--------------+
13 rows in set (0.02 sec)

-- THETA style
==>

select pm.product_no ,description
from product_master pm ,sales_order_details sod
where sod.product_no = pm.product_no; 

+------------+--------------+
| product_no | description  |
+------------+--------------+
| P00001     | T-Shirts     |
| P00001     | T-Shirts     |
| P00001     | T-Shirts     |
| P00001     | T-Shirts     |
| P0345      | Shirts       |
| P06734     | Cotton Jeans |
| P07868     | Trousers     |
| P07885     | Pull Overs   |
| P07885     | Pull Overs   |
| P07965     | Denim Shirts |
| P07965     | Denim Shirts |
| P07975     | Lycra Tops   |
| P08865     | Skirts       |
+------------+--------------+
13 rows in set (0.00 sec)


........................................................................
d.Find the names of clients who have purchased "Trousers".
........................................................................

--------ANSI style
==>

select name ,description
from  product_master pm
inner join  sales_order_details sod on sod.product_no = pm.product_no
inner join sales_order so on sod.order_no = so.order_no
inner join client_master cm on cm.client_no = so.client_no
where description ="Trousers";

+---------------+-------------+
| name          | description |
+---------------+-------------+
| Chhaya Bankar | Trousers    |
+---------------+-------------+
1 row in set (0.00 sec)

-- THETA style
==> 

select name , description
from client_master cm,product_master pm ,sales_order_details sod , sales_order so
where pm.product_no = sod.product_no
and sod.order_no = so.order_no 
and so.client_no = cm.client_no
and pm.description = "Trousers";

+---------------+-------------+
| name          | description |
+---------------+-------------+
| Chhaya Bankar | Trousers    |
+---------------+-------------+
1 row in set (0.00 sec)



........................................................................
e.List the products and orders from customers who have ordered less than 5 units of 'Pull Overs'.
........................................................................

--------ANSI style
==>
select name , description, qty_ordered
from client_master cm
inner join sales_order so on so.client_no= cm.client_no
inner join sales_order_details sod ON so.order_no = sod.order_no
inner join product_master pm ON sod.product_no = pm.product_no
where pm.description = 'Pull Overs'
and sod.qty_ordered < 5;

+---------------+-------------+-------------+
| name          | description | qty_ordered |
+---------------+-------------+-------------+
| Ivan Bayross  | Pull Overs  |           2 |
| Chhaya Bankar | Pull Overs  |           3 |
+---------------+-------------+-------------+
2 rows in set (0.00 sec)

-- THETA style
==>
select name , description , qty_ordered
from client_master cm,product_master pm ,sales_order_details sod , sales_order so
where pm.product_no = sod.product_no
and sod.order_no = so.order_no 
and so.client_no = cm.client_no
and description = 'Pull Overs'
and qty_ordered < 5;

+---------------+-------------+-------------+
| name          | description | qty_ordered |
+---------------+-------------+-------------+
| Ivan Bayross  | Pull Overs  |           2 |
| Chhaya Bankar | Pull Overs  |           3 |
+---------------+-------------+-------------+
2 rows in set (0.02 sec)



........................................................................
f. Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.
........................................................................

--------ANSI style
==>
select name ,description , qty_ordered
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no
inner join sales_order so on so.order_no = sod.order_no
inner join client_master cm on cm.client_no = so.client_no
where name="Ivan Bayross" OR name="Mamta Muzumdar";

+----------------+--------------+-------------+
| name           | description  | qty_ordered |
+----------------+--------------+-------------+
| Ivan Bayross   | T-Shirts     |           4 |
| Ivan Bayross   | Denim Shirts |           2 |
| Ivan Bayross   | Pull Overs   |           2 |
| Ivan Bayross   | Cotton Jeans |           1 |
| Ivan Bayross   | Skirts       |           2 |
| Mamta Muzumdar | T-Shirts     |          10 |
+----------------+--------------+-------------+
6 rows in set (0.00 sec)

-- THETA style
==>
select name , description , qty_on_hand
from client_master cm,product_master pm ,sales_order_details sod , sales_order so
where pm.product_no = sod.product_no
and sod.order_no = so.order_no 
and so.client_no = cm.client_no
and name in("Ivan Bayross","Mamta Muzumdar");

+----------------+--------------+-------------+
| name           | description  | qty_on_hand |
+----------------+--------------+-------------+
| Ivan Bayross   | T-Shirts     |         200 |
| Ivan Bayross   | Denim Shirts |         100 |
| Ivan Bayross   | Pull Overs   |          80 |
| Ivan Bayross   | Cotton Jeans |         100 |
| Ivan Bayross   | Skirts       |          75 |
| Mamta Muzumdar | T-Shirts     |         200 |
+----------------+--------------+-------------+
6 rows in set (0.00 sec)


........................................................................
g. Find the products and their quantities for the orders placed by ClientNo 'C00001' and 'C00002'.
........................................................................

--------ANSI style
==>

select so.client_no ,description , qty_ordered
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no
inner join sales_order so on so.order_no = sod.order_no
inner join client_master cm on cm.client_no = so.client_no
where so.client_no="C00001" OR so.client_no="C00002";

+-----------+--------------+-------------+
| client_no | description  | qty_ordered |
+-----------+--------------+-------------+
| C00001    | T-Shirts     |           4 |
| C00001    | Denim Shirts |           2 |
| C00001    | Pull Overs   |           2 |
| C00001    | Cotton Jeans |           1 |
| C00001    | Skirts       |           2 |
| C00002    | T-Shirts     |          10 |
+-----------+--------------+-------------+
6 rows in set (0.00 sec)
 
-- THETA style
==>

select cm.client_no , description , qty_on_hand
from client_master cm,product_master pm ,sales_order_details sod , sales_order so
where pm.product_no = sod.product_no
and sod.order_no = so.order_no 
and so.client_no = cm.client_no
and cm.client_no in("C00001","C00002");

+-----------+--------------+-------------+
| client_no | description  | qty_on_hand |
+-----------+--------------+-------------+
| C00001    | T-Shirts     |         200 |
| C00001    | Denim Shirts |         100 |
| C00001    | Pull Overs   |          80 |
| C00001    | Cotton Jeans |         100 |
| C00001    | Skirts       |          75 |
| C00002    | T-Shirts     |         200 |
+-----------+--------------+-------------+
6 rows in set (0.00 sec)
