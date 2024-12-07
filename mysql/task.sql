// 26-11-20024


database design task

exercise
-- client master

 create table client_master(
    clientno varchar(6),
    name varchar(20),
    address1 varchar(30),
    address2 varchar(30),
    city varchar(15),
    pincode numeric(8),
    state varchar(15),
    baldue numeric(10,2)
);

 insert into client_master values("C00001","Ivan Bayross","mota varacha","surat","Mumbai","400054","Maharashtra",15000);
insert into client_master values("C00002","Mamta Muzumdar","vijaybger","yogichok","Madras","780001","Tamil Nadu",0);
insert into client_master values("C00003","Chhaya Bankar","gitanger","punagam","Mumbai","400057","Maharashtra",5000);
insert into client_master values("C00004","Ashwini Joshi","shrdha","kamrej","Bangalore","560001","Karnatka",0);
insert into client_master values("C00005","Hansel Colaco","varj bhumi","katargam","Mumbai","400060","Maharashtra",2000);
insert into client_master values("C00006","Deepak Sharma","deepmala","bhutbhvani","Mangalore","560050","Karnatka",0);


 create table product_master(
    productno varchar(6) ,
    description varchar(15),
    profitpercent numeric(4,2),
    unitmesure varchar(10),
    qtyonhand numeric(8),
    reoderlvl numeric(8),
    sellprice numeric(8,2),
    costprice numeric(8,2)
    );

  insert into product_master values("P00001","T-Shirt",5,"Piece",200,50,350,250);
  insert into product_master values("P0345","Shirt",6,"Piece",150,50,500,350);
  insert into product_master values("P03453","T-Shirt",5,"Piece",250,50,500,350);
  insert into product_master values("P06734","Cotton Jeans",5,"Piece",100,20,600,450);
  insert into product_master values("P07865","Jeans",5,"Piece",100,20,750,500);
  insert into product_master values("P07868","Trousers",2,"Piece",150,50,850,550);
  insert into product_master values("P07885","Pull Overs",2.5,"Piece",80,30,700,450);
  insert into product_master values("P07965","Denim Shirts",4,"Piece",100,40,350,250);
  insert into product_master values("P07975","Lycra Tops",5,"Piece",70,30,300,175);
  insert into product_master values("P08865","Skirts",5,"Piece",75,30,450,300);

   create table salesman_master(
    salesmanno varchar(6),
    salesmanname varchar(20),
    address1 varchar(30),
    address2 varchar(30),
    city varchar(20),
    pincode numeric(8),
    state varchar(20),
    salamt numeric(8,2),
    tgttoget numeric(6,2),
    ytdsales numeric(6,2),
    remarks varchar(60)
    );

insert into salesman_master values("S00001","Aman","A/14","Wordi","Mumbai",400002,"Maharashtra",3000,100,50,"Good");
insert into salesman_master values("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,100,100,"Good");
insert into salesman_master values("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"Good");
insert into salesman_master values("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"Good");



////////////////////////////////////
-- select query:-


3. Exercise on retrieving records from a table

a. Find out the names of all the clients.


 mysql>select name from client_master;
+----------------+
| name           |
+----------------+
| Ivan Bayross   |
| Mamta Muzumdar |
| Chhaya Bankar  |
| Ashwini Joshi  |
| Hansel Colaco  |
| Deepak Sharma  |
+----------------+

b. Retrieve the entire contents of the Client Master table.

 select * from client_master;
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| clientno | name           | address1     | address2   | city      | pincode | state       | baldue   |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | vijaybger    | yogichok   | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Ashwini Joshi  | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |     0.00 |
| C00005   | Hansel Colaco  | varj bhumi   | katargam   | Mumbai    |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | deepmala     | bhutbhvani | Mangalore |  560050 | Karnatka    |     0.00 |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+

c. Retrieve the list of names, city and the sate of all the clients.

mysql> select name ,city ,state from client_master;
+----------------+-----------+-------------+
| name           | city      | state       |
+----------------+-----------+-------------+
| Ivan Bayross   | Mumbai    | Maharashtra |
| Mamta Muzumdar | Madras    | Tamil Nadu  |
| Chhaya Bankar  | Mumbai    | Maharashtra |
| Ashwini Joshi  | Bangalore | Karnatka    |
| Hansel Colaco  | Mumbai    | Maharashtra |
| Deepak Sharma  | Mangalore | Karnatka    |
+----------------+-----------+-------------+

d. List the various products available from the Product Master table.

mysql> select description from product_master;
+--------------+
| description  |
+--------------+
| T-Shirt      |
| Shirt        |
| T-Shirt      |
| Cotton Jeans |
| Jeans        |
| Trousers     |
| Pull Overs   |
| Denim Shirts |
| Lycra Tops   |
| Skirts       |
+--------------+

e. List all the clients who are located in Mumbai.

mysql> select name , city from client_master where city= "mumbai";
+---------------+--------+
| name          | city   |
+---------------+--------+
| Ivan Bayross  | Mumbai |
| Chhaya Bankar | Mumbai |
| Hansel Colaco | Mumbai |
+---------------+--------+

f. Find the names of salesmen who have a salary equal to Rs.3000.
mysql> select salesmanname, salamt from salesman_master where salamt=3000;
+--------------+---------+
| salesmanname | salamt  |
+--------------+---------+
| Aman         | 3000.00 |
| Omkar        | 3000.00 |
| Raj          | 3000.00 |
+--------------+---------+

//////////////////////////////////////////

upadte query
4. Exercise on updating records in a table

a. Change the city of ClientNo 'C00005' to 'Bangalore'.

mysql>update client_master set city= "bangalore" where clientno="C00006";
Query OK, 1 row affected (0.03 sec)
mysql> select *from client_master;
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| clientno | name           | address1     | address2   | city      | pincode | state       | baldue   |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | vijaybger    | yogichok   | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Ashwini Joshi  | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |     0.00 |
| C00005   | Hansel Colaco  | varj bhumi   | katargam   | bangalore |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | deepmala     | bhutbhvani | bangalore |  560050 | Karnatka    |     0.00 |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+


b. Change the BalDue of ClientNo 'C00001' to Rs. 1000. 

mysql> update client_master set baldue=1000 where clientno ="C00001";
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select *from client_master;
+----------+----------------+--------------+------------+-----------+---------+-------------+---------+
| clientno | name           | address1     | address2   | city      | pincode | state       | baldue  |
+----------+----------------+--------------+------------+-----------+---------+-------------+---------+
| C00001   | Ivan Bayross   | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 1000.00 |
| C00002   | Mamta Muzumdar | vijaybger    | yogichok   | Madras    |  780001 | Tamil Nadu  |    0.00 |
| C00003   | Chhaya Bankar  | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra | 5000.00 |
| C00004   | Ashwini Joshi  | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |    0.00 |
| C00005   | Hansel Colaco  | varj bhumi   | katargam   | bangalore |  400060 | Maharashtra | 2000.00 |
| C00006   | Deepak Sharma  | deepmala     | bhutbhvani | bangalore |  560050 | Karnatka    |    0.00 |
+----------+----------------+--------------+------------+-----------+---------+-------------+---------+


c. Change the cost price of Trousers to Rs. 950.00. 

mysql> update product_master set costprice=950 where description ="Trousers";
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql>  select *from product_master;
+-----------+--------------+---------------+------------+-----------+-----------+-----------+-----------+
| productno | description  | profitpercent | unitmesure | qtyonhand | reoderlvl | sellprice | costprice |
+-----------+--------------+---------------+------------+-----------+-----------+-----------+-----------+
| P00001    | T-Shirt      |          5.00 | Piece      |       200 |        50 |    350.00 |    250.00 |
| P0345     | Shirt        |          6.00 | Piece      |       150 |        50 |    500.00 |    350.00 |
| P03453    | T-Shirt      |          5.00 | Piece      |       250 |        50 |    500.00 |    350.00 |
| P06734    | Cotton Jeans |          5.00 | Piece      |       100 |        20 |    600.00 |    450.00 |
| P07865    | Jeans        |          5.00 | Piece      |       100 |        20 |    750.00 |    500.00 |
| P07868    | Trousers     |          2.00 | Piece      |       150 |        50 |    850.00 |    950.00 |
| P07885    | Pull Overs   |          2.50 | Piece      |        80 |        30 |    700.00 |    450.00 |
| P07965    | Denim Shirts |          4.00 | Piece      |       100 |        40 |    350.00 |    250.00 |
| P07975    | Lycra Tops   |          5.00 | Piece      |        70 |        30 |    300.00 |    175.00 |
| P08865    | Skirts       |          5.00 | Piece      |        75 |        30 |    450.00 |    300.00 |
+-----------+--------------+---------------+------------+-----------+-----------+-----------+-----------+

d. Change the city of the salesman to Pune.

mysql> update salesman_master set city="pune";
Query OK, 4 rows affected (0.03 sec)
Rows matched: 4  Changed: 4  Warnings: 0

mysql>  select *from salesman_master;
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| salesmanno | salesmanname | address1 | address2 | city | pincode | state       | salamt  | tgttoget | ytdsales | remarks |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| S00001     | Aman         | A/14     | Wordi    | pune |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good    |
| S00002     | Omkar        | 65       | Nariman  | pune |  400001 | Maharashtra | 3000.00 |   100.00 |   100.00 | Good    |
| S00003     | Raj          | P-7      | Bandra   | pune |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good    |
| S00004     | Ashish       | A/5      | Juhu     | pune |  400044 | Maharashtra | 3500.00 |   200.00 |   150.00 | Good    |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+

////////////////////////////////////////////////////////////////

delete query
5. Exercise on deleting records in a table

a. Delete all salesmen from the Salesman_Master whose salaries are equal to Rs. 3500. 

mysql> delete from salesman_master where salamt = 3500;
Query OK, 1 row affected (0.02 sec)

mysql>  select *from salesman_master;
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| salesmanno | salesmanname | address1 | address2 | city | pincode | state       | salamt  | tgttoget | ytdsales | remarks |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| S00001     | Aman         | A/14     | Wordi    | pune |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good    |
| S00002     | Omkar        | 65       | Nariman  | pune |  400001 | Maharashtra | 3000.00 |   100.00 |   100.00 | Good    |
| S00003     | Raj          | P-7      | Bandra   | pune |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good    |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+

b. Delete all products from Product_Master where the quantity on hand is equal to 100. 

mysql> delete from product_master where qtyonhand = 100;
Query OK, 3 rows affected (0.03 sec)

mysql>  select *from product_master;
+-----------+-------------+---------------+------------+-----------+-----------+-----------+-----------+
| productno | description | profitpercent | unitmesure | qtyonhand | reoderlvl | sellprice | costprice |
+-----------+-------------+---------------+------------+-----------+-----------+-----------+-----------+
| P00001    | T-Shirt     |          5.00 | Piece      |       200 |        50 |    350.00 |    250.00 |
| P0345     | Shirt       |          6.00 | Piece      |       150 |        50 |    500.00 |    350.00 |
| P03453    | T-Shirt     |          5.00 | Piece      |       250 |        50 |    500.00 |    350.00 |
| P07868    | Trousers    |          2.00 | Piece      |       150 |        50 |    850.00 |    950.00 |
| P07885    | Pull Overs  |          2.50 | Piece      |        80 |        30 |    700.00 |    450.00 |
| P07975    | Lycra Tops  |          5.00 | Piece      |        70 |        30 |    300.00 |    175.00 |
| P08865    | Skirts      |          5.00 | Piece      |        75 |        30 |    450.00 |    300.00 |
+-----------+-------------+---------------+------------+-----------+-----------+-----------+-----------+
 
c. Delete from Client Master where the column state holds the value 'Tamil Nadu'.

mysql> delete from client_master where state= "Tamil Nadu";
Query OK, 1 row affected (0.03 sec)

mysql>  select *from client_master;
+----------+---------------+--------------+------------+-----------+---------+-------------+---------+
| clientno | name          | address1     | address2   | city      | pincode | state       | baldue  |
+----------+---------------+--------------+------------+-----------+---------+-------------+---------+
| C00001   | Ivan Bayross  | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 1000.00 |
| C00003   | Chhaya Bankar | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra | 5000.00 |
| C00004   | Ashwini Joshi | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |    0.00 |
| C00005   | Hansel Colaco | varj bhumi   | katargam   | bangalore |  400060 | Maharashtra | 2000.00 |
| C00006   | Deepak Sharma | deepmala     | bhutbhvani | bangalore |  560050 | Karnatka    |    0.00 |
+----------+---------------+--------------+------------+-----------+---------+-------------+---------+

06-12-2024 friday ANSI style query

2. Exercises on Joins and Correlation:

........................................................................
a. Find out the products, which have been sold to 'Ivan Bayross'.
........................................................................

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


........................................................................
b. Find out the products and their quantities that will have to be delivered in the current month.
........................................................................




........................................................................
c. List the ProductNo and description of constantly sold (i.e. rapidly moving) products.
........................................................................

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

........................................................................
d.Find the names of clients who have purchased "Trousers".
........................................................................

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


........................................................................
e.List the products and orders from customers who have ordered less than 5 units of 'Pull Overs'.
........................................................................

==>
SELECT cm.name ,so.order_no, so.client_no, so.order_date, sod.product_no, pm.description, sod.qty_ordered
FROM client_master cm
join sales_order so on so.client_no= cm.client_no
JOIN sales_order_details sod ON so.order_no = sod.order_no
JOIN product_master pm ON sod.product_no = pm.product_no
WHERE pm.description = 'Pull Overs'
AND sod.qty_ordered < 5;

+---------------+----------+-----------+------------+------------+-------------+-------------+
| name          | order_no | client_no | order_date | product_no | description | qty_ordered |
+---------------+----------+-----------+------------+------------+-------------+-------------+
| Ivan Bayross  | O19001   | C00001    | 2004-06-12 | P07885     | Pull Overs  |           2 |
| Chhaya Bankar | O46865   | C00003    | 2004-02-18 | P07885     | Pull Overs  |           3 |
+---------------+----------+-----------+------------+------------+-------------+-------------+
2 rows in set (0.00 sec)


........................................................................
f. Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.
........................................................................

==>
select name ,description , qty_ordered
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no
inner join sales_order so on so.order_no = sod.order_no
inner join client_master cm on cm.client_no = so.client_no
where name="Ivan Bayross" || name="Mamta Muzumdar";


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
6 rows in set, 1 warning (0.00 sec)


........................................................................
g. Find the products and their quantities for the orders placed by ClientNo 'C00001' and 'C00002'.
........................................................................

==>

select so.client_no ,description , qty_ordered
from product_master pm
inner join sales_order_details sod on sod.product_no = pm.product_no
inner join sales_order so on so.order_no = sod.order_no
inner join client_master cm on cm.client_no = so.client_no
where so.client_no="C00001" || so.client_no="C00002";

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
6 rows in set, 1 warning (0.02 sec)
 

-- THETA style query

2. Exercises on Joins and Correlation:

........................................................................
a. Find out the products, which have been sold to 'Ivan Bayross'.
........................................................................

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


........................................................................
c. List the ProductNo and description of constantly sold (i.e. rapidly moving) products.
........................................................................

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
d.Find the names of clients who have purchased 'Trousers'.
........................................................................

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
e.List the products and orders from customers who have ordered less than 5 units of "Pull Overs".
........................................................................

==>


........................................................................
f. Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.
........................................................................

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

