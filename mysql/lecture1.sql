25-11-2024

 show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test               |
+--------------------+
5 rows in set (0.03 sec)

//////////////////////////////////////////////////////////////////////
use test
Database changed

//////////////////////////////////////////////////////////////////////


create table stud(id varchar(10) primary key,s_name varchar(30),s_city varchar(30),s_age varchar(5),s_mobileno varchar(30));
Query OK, 0 rows affected (0.05 sec)

//////////////////////////////////////////////////////////////////////


INSERT INTO stud VALUES(1, "Darshan", "Surat", 20, 9712920103);
Query OK, 1 row affected (0.03 sec)

INSERT INTO stud VALUES(2, "Ravi", "Ahmedabad", 22, 9823456712);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(3, "Priya", "Vadodara", 21, 9912345678);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(4, "Amit", "Rajkot", 23, 9976543210);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(5, "Neha", "Surat", 19, 9734567890);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(6, "Suresh", "Baroda", 24, 9812345678);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(7, "Kiran", "Vapi", 25, 9956123456);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(8, "Rina", "Bhavnagar", 21, 9876543210);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(9, "Vijay", "Gandhinagar", 20, 9712345678);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(10, "Manoj", "Surat", 23, 9776655443);
Query OK, 1 row affected (0.00 sec)

INSERT INTO stud VALUES(11, "Simran", "Rajkot", 22, 9819234567);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(12, "Sanjay", "Ahmedabad", 21, 9908765432);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(13, "Komal", "Vadodara", 24, 9967456789);
Query OK, 1 row affected (0.00 sec)

INSERT INTO stud VALUES(14, "Harsh", "Surat", 20, 9798643021);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(15, "Meera", "Vapi", 26, 9801234567);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(16, "Deepak", "Gandhinagar", 23, 9745123456);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(17, "Snehal", "Surat", 22, 9716549870);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(18, "Raj", "Baroda", 20, 9945678901);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(19, "Anita", "Bhavnagar", 21, 9623456789);
Query OK, 1 row affected (0.01 sec)

INSERT INTO stud VALUES(20, "Vinay", "Ahmedabad", 24, 9753124567);
Query OK, 1 row affected (0.01 sec)


//////////////////////////////////////////////////////////////////////

 select * from stud;
+----+---------+-------------+-------+------------+
| id | s_name  | s_city      | s_age | s_mobileno |
+----+---------+-------------+-------+------------+
| 1  | Darshan | Surat       | 20    | 9712920103 |
| 10 | Manoj   | Surat       | 23    | 9776655443 |
| 11 | Simran  | Rajkot      | 22    | 9819234567 |
| 12 | Sanjay  | Ahmedabad   | 21    | 9908765432 |
| 13 | Komal   | Vadodara    | 24    | 9967456789 |
| 14 | Harsh   | Surat       | 20    | 9798643021 |
| 15 | Meera   | Vapi        | 26    | 9801234567 |
| 16 | Deepak  | Gandhinagar | 23    | 9745123456 |
| 17 | Snehal  | Surat       | 22    | 9716549870 |
| 18 | Raj     | Baroda      | 20    | 9945678901 |
| 19 | Anita   | Bhavnagar   | 21    | 9623456789 |
| 2  | Ravi    | Ahmedabad   | 22    | 9823456712 |
| 20 | Vinay   | Ahmedabad   | 24    | 9753124567 |
| 3  | Priya   | Vadodara    | 21    | 9912345678 |
| 4  | Amit    | Rajkot      | 23    | 9976543210 |
| 5  | Neha    | Surat       | 19    | 9734567890 |
| 6  | Suresh  | Baroda      | 24    | 9812345678 |
| 7  | Kiran   | Vapi        | 25    | 9956123456 |
| 8  | Rina    | Bhavnagar   | 21    | 9876543210 |
| 9  | Vijay   | Gandhinagar | 20    | 9712345678 |
+----+---------+-------------+-------+------------+
20 rows in set (0.00 sec)


//////////////////////////////////////////////////////////////////////

mysql> select * from stud where s_name = "vinay";
+----+--------+-----------+-------+------------+
| id | s_name | s_city    | s_age | s_mobileno |
+----+--------+-----------+-------+------------+
| 20 | Vinay  | Ahmedabad | 24    | 9753124567 |
+----+--------+-----------+-------+------------+
1 row in set (0.07 sec)

//////////////////////////////////////////////////////////////////////


like predicate

//////////////////////////////////////////////////////////////////////


 select * from stud where s_name like 'A%';
+----+--------+-----------+-------+------------+
| id | s_name | s_city    | s_age | s_mobileno |
+----+--------+-----------+-------+------------+
| 19 | Anita  | Bhavnagar | 21    | 9623456789 |
| 4  | Amit   | Rajkot    | 23    | 9976543210 |
+----+--------+-----------+-------+------------+
2 rows in set (0.00 sec)

//////////////////////////////////////////////////////////////////////

 select * from stud where s_name like '%h';
+----+--------+--------+-------+------------+
| id | s_name | s_city | s_age | s_mobileno |
+----+--------+--------+-------+------------+
| 14 | Harsh  | Surat  | 20    | 9798643021 |
| 6  | Suresh | Baroda | 24    | 9812345678 |
+----+--------+--------+-------+------------+
2 rows in set (0.00 sec)

//////////////////////////////////////////////////////////////////////

 select * from stud where s_name like '_a%';
+----+---------+-----------+-------+------------+
| id | s_name  | s_city    | s_age | s_mobileno |
+----+---------+-----------+-------+------------+
| 1  | Darshan | Surat     | 20    | 9712920103 |
| 10 | Manoj   | Surat     | 23    | 9776655443 |
| 12 | Sanjay  | Ahmedabad | 21    | 9908765432 |
| 14 | Harsh   | Surat     | 20    | 9798643021 |
| 18 | Raj     | Baroda    | 20    | 9945678901 |
| 2  | Ravi    | Ahmedabad | 22    | 9823456712 |
+----+---------+-----------+-------+------------+
6 rows in set (0.00 sec)

//////////////////////////////////////////////////////////////////////

 select * from stud where s_name like '%a_';
+----+---------+-------------+-------+------------+
| id | s_name  | s_city      | s_age | s_mobileno |
+----+---------+-------------+-------+------------+
| 1  | Darshan | Surat       | 20    | 9712920103 |
| 11 | Simran  | Rajkot      | 22    | 9819234567 |
| 12 | Sanjay  | Ahmedabad   | 21    | 9908765432 |
| 13 | Komal   | Vadodara    | 24    | 9967456789 |
| 16 | Deepak  | Gandhinagar | 23    | 9745123456 |
| 17 | Snehal  | Surat       | 22    | 9716549870 |
| 18 | Raj     | Baroda      | 20    | 9945678901 |
| 20 | Vinay   | Ahmedabad   | 24    | 9753124567 |
| 7  | Kiran   | Vapi        | 25    | 9956123456 |
| 9  | Vijay   | Gandhinagar | 20    | 9712345678 |
+----+---------+-------------+-------+------------+
10 rows in set (0.00 sec)

//////////////////////////////////////////////////////////////////////

 select * from stud where s_name like '%s_';
+----+--------+--------+-------+------------+
| id | s_name | s_city | s_age | s_mobileno |
+----+--------+--------+-------+------------+
| 14 | Harsh  | Surat  | 20    | 9798643021 |
| 6  | Suresh | Baroda | 24    | 9812345678 |
+----+--------+--------+-------+------------+
2 rows in set (0.00 sec)

//////////////////////////////////////////////////////////////////////

truncate predicate

truncate table stud1;
Query OK, 0 rows affected (0.07 sec)


26-11-2024

//////////////////////////////////////////////////////////////////////

 create table client_master(client_no varchar(10),name varchar(10),address1 varchar(30),address2 varchar(30),city varchar(30),pincode numeric(10),state varchar(10),baldue numeric(10));
Query OK, 0 rows affected (0.06 sec)

//////////////////////////////////////////////////////////////////////

 create table product_master(productno varchar(10),description varchar(30),profitpercent numeric(5),unitmesure varchar(10),qtyonhand numeric(8),reoderlvl numeric(10),sellprice numeric(10),costprice numeric(10));
Query OK, 0 rows affected (0.06 sec)

//////////////////////////////////////////////////////////////////////

create table salesman_master(salesmanno varchar(6),salesmanname varchar(20),address1 varchar(30),address2 varchar(30),city varchar(20),pincode numeric(20),state varchar(20),salamt numeric(10),tgttoget numeric(10),ytdsales varchar(10),remarks varchar(60));
Query OK, 0 rows affected (0.06 sec)


//////////////////////////////////////////////////////////////////////

26-11-2024 ( prectice )

drop table person;
Query OK, 0 rows affected (0.13 sec)

drop table person1;
Query OK, 0 rows affected (0.05 sec)

drop table person2;
Query OK, 0 rows affected (0.05 sec)


//////////////////////////////////////////////////////////////////////

27-11-2024 (prectice)

 show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test               |
+--------------------+
5 rows in set (0.03 sec)


use test
Database changed
mysql> show tables;
+-----------------+
| Tables_in_test  |
+-----------------+
| client_master   |
| product_master  |
| salesman_master |
| stud            |
+-----------------+
4 rows in set (0.02 sec)


drop table client_master;
Query OK, 0 rows affected (0.12 sec)

mysql> show tables;
+-----------------+
| Tables_in_test  |
+-----------------+
| product_master  |
| salesman_master |
| stud            |
+-----------------+
3 rows in set (0.00 sec)


 drop table product_master;
Query OK, 0 rows affected (0.05 sec)

mysql> show tables;
+-----------------+
| Tables_in_test  |
+-----------------+
| salesman_master |
| stud            |
+-----------------+
2 rows in set (0.00 sec)


drop table salesman_master;
Query OK, 0 rows affected (0.12 sec)

mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| stud           |
+----------------+
1 row in set (0.00 sec)


create table client_master(address2 varchar(30),city varchar(15),pincode numeric(8),state varchar(15),baldue numeric(10,2));
Query OK, 0 rows affected (0.07 sec)


mysql> insert into client_master values("lakhminager","surat",395010,"gujarat",2);
Query OK, 1 row affected (0.03 sec)

mysql> insert into client_master values("vitinager","ahemdabad",394010,"rajshthan",5);
Query OK, 1 row affected (0.03 sec)

mysql> insert into client_master values("shreenathji","jamanger",393010,"delhi",4);
Query OK, 1 row affected (0.08 sec)

mysql> insert into client_master values("vitinger","bharuch",396010,"mumbai",8);
Query OK, 1 row affected (0.02 sec)

select * from client_master;
+-------------+-----------+---------+-----------+--------+
| address2    | city      | pincode | state     | baldue |
+-------------+-----------+---------+-----------+--------+
| lakhminager | surat     |  395010 | gujarat   |   2.00 |
| vitinager   | ahemdabad |  394010 | rajshthan |   5.00 |
| shreenathji | jamanger  |  393010 | delhi     |   4.00 |
| vitinger    | bharuch   |  396010 | mumbai    |   8.00 |
+-------------+-----------+---------+-----------+--------+
4 rows in set (0.00 sec)



29-11-2024  friday

create database exercises1;

 create table client_master(clientno varchar(6) primary key,name varchar(20),address1 varchar(30),address2 varchar(30),city varchar(15),pincode numeric(8),state varchar(15),baldue numeric(10,2));

insert into client_master values("C00001","Ivan Bayross","mota varacha","surat","Mumbai","400054","Maharashtra",15000);
insert into client_master values("C00002","Mamta Muzumdar","vijaybger","yogichok","Madras","780001","Tamil Nadu",0);
insert into client_master values("C00003","Chhaya Bankar","gitanger","punagam","Mumbai","400057","Maharashtra",5000);
insert into client_master values("C00004","Ashwini Joshi","shrdha","kamrej","Bangalore","560001","Karnatka",0);
insert into client_master values("C00005","Hansel Colaco","varj bhumi","katargam","Mumbai","400060","Maharashtra",2000);
insert into client_master values("C00006","Deepak Sharma","deepmala","bhutbhvani","Mangalore","560050","Karnatka",0);


  create table product_master(productno varchar(6) primary key,description varchar(15),profitpercent numeric(4,2),unitmesure varchar(10),qtyonhand numeric(8),reoderlvl numeric(8),sellprice numeric(8,2),costprice numeric(8,2));

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

create table salesman_master(salesmanno varchar(6) primary key,salesmanname varchar(20),address1 varchar(30),address2 varchar(30),city varchar(20),pincode numeric(8),state varchar(20),salamt numeric(8,2),tgttoget numeric(6,2),ytdsales numeric(6,2),remarks varchar(60));


insert into salesman_master values("S00001","Aman","A/14","Wordi","Mumbai",400002,"Maharashtra",3000,100,50,"Good");
insert into salesman_master values("S00002","Omkar","65","Nariman","Mumbai",400001,"Maharashtra",3000,100,100,"Good");
insert into salesman_master values("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharashtra",3000,200,100,"Good");
insert into salesman_master values("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharashtra",3500,200,150,"Good");


create table sales_order(
    orderno varchar(6) primary key,
    clientno varchar(6),
    orderdate date,
    delyaddr varchar(25),
    salesmanno varchar(6),
    delytype char(1),
    billyn char(1),             
    delydate date,
    orderstaus varchar(10),
foreign key (clientno) references client_master(clientno),
foreign key (salesmanno) references salesman_master(salesmanno)
);

insert into sales_order values("O19001","C00001","12-06-04","Mumbai","S00001","F","N","20-07-02","In Process");
insert into sales_order values("O19002","C00002","25-06-04","Gujarat","S00002","P","N","27-06-02","Cancelled");
insert into sales_order values("O46865","C00003","18-02-04","Delhi","S00003","F","Y","20-02-02","Fulfilled");
insert into sales_order values("O19003","C00001","03-04-04","Ahemdabad","S00001","F","Y","27-04-02","Fulfilled");
insert into sales_order values("O46866","C00004","20-05-04","Rajshthan","S00002","P","N","22-05-02","Cancelled");
insert into sales_order values("O19008","C00005","24-05-04","Banglore","S00004","F","N","26-07-02","In Process");

create table sales_order_details(
    orderno varchar(6),
    productno varchar(6),
    qtyorderd numeric(8),
    qtydisp numeric(8),
    productrate numeric(10,2),
    foreign key (orderno) references sales_order(orderno),
    foreign key (productno) references product_master(productno)
);


insert into sales_order_details values("O19001","P00001",4,4,525);
insert into sales_order_details values("O19001","P07965",2,1,8400);
insert into sales_order_details values("O19001","P07885",2,1,5250);
insert into sales_order_details values("O19002","P00001",10,0,525);
insert into sales_order_details values("O46865","P07868",3,3,3150);
insert into sales_order_details values("O46865","P07885",3,1,5250);
insert into sales_order_details values("O46865","P00001",10,10,525);
insert into sales_order_details values("O46865","P0345",4,4,1050);
insert into sales_order_details values("O19003","P08865",2,2,1050);
insert into sales_order_details values("O19003","P06734",1,1,12000);
insert into sales_order_details values("O46866","P07965",1,0,8400);
insert into sales_order_details values("O46866","P07975",1,0,1050);
insert into sales_order_details values("O19008","P00001",10,5,525);
insert into sales_order_details values("O19008","P07975",5,3,1050);



-- 04-12-2024

-- join Query

theory

-- 05-12-2024

-- ANSI style SYNTAX:-

select <column_name1>,<column_name2>,<column_nameN>
from <table_name1>,<table_name2>
where <table_name1>.<column_name1>=<table_name2>.<column_name2>
and <condition>
order by <column_name1>,<column_name2>,<column_nameN>

select description,product_rate
from product_master,sales_order_details
where product_master.product_no = sales_order_details.product_no; 

+--------------+--------------+
| description  | product_rate |
+--------------+--------------+
| T-Shirts     |       525.00 |
| Denim Shirts |      8400.00 |
| Pull Overs   |      5250.00 |
| T-Shirts     |       525.00 |
| Trousers     |      3150.00 |
| Pull Overs   |      5250.00 |
| T-Shirts     |       525.00 |
| Shirts       |      1050.00 |
| Cotton Jeans |     12000.00 |
| Denim Shirts |      8400.00 |
| T-Shirts     |       525.00 |
| Lycra Tops   |      1050.00 |
| Skirts       |      1050.00 |
+--------------+--------------+
13 rows in set (0.00 sec)


select pm.description,sod.product_rate
from product_master pm,sales_order_details sod
where pm.product_no = sod.product_no; 

+--------------+--------------+
| description  | product_rate |
+--------------+--------------+
| T-Shirts     |       525.00 |
| Denim Shirts |      8400.00 |
| Pull Overs   |      5250.00 |
| T-Shirts     |       525.00 |
| Trousers     |      3150.00 |
| Pull Overs   |      5250.00 |
| T-Shirts     |       525.00 |
| Shirts       |      1050.00 |
| Cotton Jeans |     12000.00 |
| Denim Shirts |      8400.00 |
| T-Shirts     |       525.00 |
| Lycra Tops   |      1050.00 |
| Skirts       |      1050.00 |
+--------------+--------------+
13 rows in set (0.00 sec)


select sales_order_details.order_no,product_rate,order_date,description
from sales_order,sales_order_details,product_master
where sales_order_details.order_no = sales_order.order_no
and sales_order_details.product_no = product_master.product_no;

+----------+--------------+------------+--------------+
| order_no | product_rate | order_date | description  |
+----------+--------------+------------+--------------+
| O19001   |       525.00 | 2004-06-12 | T-Shirts     |
| O19001   |      8400.00 | 2004-06-12 | Denim Shirts |
| O19001   |      5250.00 | 2004-06-12 | Pull Overs   |
| O19002   |       525.00 | 2004-06-25 | T-Shirts     |
| O19003   |     12000.00 | 2004-04-03 | Cotton Jeans |
| O19003   |      1050.00 | 2004-04-03 | Skirts       |
| O19008   |       525.00 | 2004-05-24 | T-Shirts     |
| O19008   |      1050.00 | 2004-05-24 | Lycra Tops   |
| O46865   |      3150.00 | 2004-02-18 | Trousers     |
| O46865   |      5250.00 | 2004-02-18 | Pull Overs   |
| O46865   |       525.00 | 2004-02-18 | T-Shirts     |
| O46865   |      1050.00 | 2004-02-18 | Shirts       |
| O46866   |      8400.00 | 2004-05-20 | Denim Shirts |
+----------+--------------+------------+--------------+
13 rows in set (0.00 sec)



=> prectise
select sell_price,dely_date,qty_disp
from product_master,sales_order,sales_order_details
where product_master.product_no = sales_order_details.product_no
and sales_order_details.order_no = sales_order.order_no;

+------------+------------+----------+
| sell_price | dely_date  | qty_disp |
+------------+------------+----------+
|     350.00 | 2002-07-20 |        4 |
|     350.00 | 2002-07-20 |        1 |
|     700.00 | 2002-07-20 |        1 |
|     350.00 | 2002-06-27 |        0 |
|     600.00 | 2002-04-07 |        1 |
|     450.00 | 2002-04-07 |        2 |
|     350.00 | 2002-07-26 |        5 |
|     300.00 | 2002-07-26 |        3 |
|     850.00 | 2002-02-20 |        3 |
|     700.00 | 2002-02-20 |        1 |
|     350.00 | 2002-02-20 |       10 |
|     500.00 | 2002-02-20 |        4 |
|     350.00 | 2002-05-22 |        0 |
+------------+------------+----------+
13 rows in set (0.00 sec)

select salesman_name ,sales_order.salesman_no,order_status
from salesman_master,sales_order
where salesman_master.salesman_no = sales_order.salesman_no;

mysql> select salesman_name ,sales_order.salesman_no,order_status
    -> from salesman_master,sales_order
    -> where salesman_master.salesman_no = sales_order.salesman_no;
+---------------+-------------+--------------+
| salesman_name | salesman_no | order_status |
+---------------+-------------+--------------+
| Aman          | S00001      | In Process   |
| Aman          | S00001      | Fulfilled    |
| Omkar         | S00002      | Cancelled    |
| Omkar         | S00002      | Cancelled    |
| Raj           | S00003      | Fulfilled    |
| Ashish        | S00004      | In Process   |
+---------------+-------------+--------------+
6 rows in set (0.02 sec)