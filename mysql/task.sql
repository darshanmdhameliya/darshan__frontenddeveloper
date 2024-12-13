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










