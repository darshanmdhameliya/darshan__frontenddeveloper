02-12-2024 

create table client_master(
    clientno varchar(6) NOT NULL,
    name varchar(20),
    address1 varchar(30),
    address2 varchar(30),
    city varchar(15),
    pincode numeric(8),
    state varchar(15),
    baldue numeric(10,2),
    constraint pk primary key(clientno),
    check (clientno like 'C%')
);

 insert into client_master values("l00001","Ivan Bayross","mota varacha","surat","Mumbai","400054","Maharashtra",15000);

 mysql>  insert into client_master values("c00001","Ivan Bayross","mota varacha","surat","Mumbai","400054","Maharashtra",15000);
ERROR 3819 (HY000): Check constraint 'client_master_chk_1' is violated.



 create table product_master(
    productno varchar(6) primary key,
    description varchar(15) not null,
    profitpercent numeric(4,2) not null,
    unitmesure varchar(10) not null,
    qtyonhand numeric(8) not null,
    reoderlvl numeric(8) not null,
    sellprice numeric(8,2) not null  check (sellprice > 0),
    costprice numeric(8,2) not null  check (costprice > 0),
    check (productno like 'P%'),
    check ( sellprice > 0),
    check ( costprice > 0)
    );

mysql>   insert into product_master values("P00001","T-Shirt",5,"Piece",200,50,0,0);
ERROR 3819 (HY000): Check constraint 'product_master_chk_1' is violated.
  insert into product_master values("P00001","T-Shirt",5,"Piece",200,50,350,250);


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
    remarks varchar(60),
    primary key (salesmanno);
    );

  
insert into salesman_master values("S00001","Aman","A/14","Wordi","Mumbai",400002,"Maharashtra",3000,100,50,"Good");





