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

 insert into client_master values("c00001","Ivan Bayross","mota varacha","surat","Mumbai","400054","Maharashtra",15000);


 create table client_master1(
    clientno varchar(6) NOT NULL,
    name varchar(20)  ,
    address1 varchar(30),
    address2 varchar(30),
    city varchar(15),
    pincode numeric(8),
    state varchar(15),
    baldue numeric(10,2),
    constraint pk primary key(clientno),
    check (clientno like 'C%'),
    check (clientno = upper(clientno))
);

 insert into client_master1 values("c00001" ,"Ivan Bayross","mota varacha","surat","Mumbai","400054","Maharashtra",15000);



 create table product_master2(
    productno varchar(6) primary key,
    description varchar(15) not null,
    profitpercent numeric(4,2) not null,
    unitmesure varchar(10) not null,
    qtyonhand numeric(8) not null,
    reoderlvl numeric(8) not null,
    sellprice numeric(8,2) not null  check (sellprice > 0),
    costprice numeric(8,2) not null  check (costprice > 0),
    check (productno like 'P')
    );

  insert into product_master values("P00001","T-Shirt",5,"Piece",200,50,350,250);




