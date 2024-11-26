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

mysql> INSERT INTO stud VALUES(2, "Ravi", "Ahmedabad", 22, 9823456712);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(3, "Priya", "Vadodara", 21, 9912345678);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(4, "Amit", "Rajkot", 23, 9976543210);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(5, "Neha", "Surat", 19, 9734567890);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(6, "Suresh", "Baroda", 24, 9812345678);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(7, "Kiran", "Vapi", 25, 9956123456);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(8, "Rina", "Bhavnagar", 21, 9876543210);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(9, "Vijay", "Gandhinagar", 20, 9712345678);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(10, "Manoj", "Surat", 23, 9776655443);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO stud VALUES(11, "Simran", "Rajkot", 22, 9819234567);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(12, "Sanjay", "Ahmedabad", 21, 9908765432);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(13, "Komal", "Vadodara", 24, 9967456789);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO stud VALUES(14, "Harsh", "Surat", 20, 9798643021);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(15, "Meera", "Vapi", 26, 9801234567);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(16, "Deepak", "Gandhinagar", 23, 9745123456);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(17, "Snehal", "Surat", 22, 9716549870);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(18, "Raj", "Baroda", 20, 9945678901);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(19, "Anita", "Bhavnagar", 21, 9623456789);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO stud VALUES(20, "Vinay", "Ahmedabad", 24, 9753124567);
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