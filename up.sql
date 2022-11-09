  create table user(user_id bigint(5) primary key,
                    user_name varchar(30),
                    passwd varchar(8),
                    email varchar(20)
                    );

create table role(ut_id varchar(4)primary key,
                        usr_type varchar(15)
                        );
            
create table user_n_role(user_id bigint(5),
                         ut_id varchar(4),
                         primary key(user_id,ut_id),
                         foreign key(user_id)references user(user_id),
                         foreign key(ut_id)references role(ut_id)
                         );

insert into user values('u1','Adarsh','a123','ad@mail.com');
insert into user values('u2','Akash','a124','ak@mail.com');
insert into user values('u3','Ajay','a125','aj@mail.com');
insert into user values('u4','Uma','u123','um@mail.com');
insert into user values('u5','Tom','t123','tm@mail.com');
insert into user values('u6','john','j123','jn@mail.com');
insert into user values('u7','Krish','kr123','kr@mail.com');


mysql> select *from user;
+---------+----------+--------+-------------+
| user_id | username | passwd | email       |
+---------+----------+--------+-------------+
| 1001    | NULL     | NULL   | NULL        |
| u1      | Adarsh   | a123   | ad@mail.com |
| u2      | Akash    | a124   | ak@mail.com |
| u3      | Ajay     | a125   | aj@mail.com |
| u4      | Uma      | u123   | um@mail.com |
| u5      | Tom      | t123   | tm@mail.com |
| u6      | john     | j123   | jn@mail.com |
| u7      | Krish    | kr123  | kr@mail.com |
+---------+----------+--------+-------------+
8 rows in set (0.00 sec)


insert into role values('ut1','USR');
insert into role values('ut2','GRO');
insert into role values('ut3','RO');


mysql> select *from role;
+-------+----------+
| ut_id | usr_type |
+-------+----------+
| ut1   | USR      |
| ut2   | GRO      |
| ut3   | RO       |
+-------+----------+


insert into user_n_role values('u1','ut1');
insert into user_n_role values('u1','ut2');
insert into user_n_role values('u1','ut3');
insert into user_n_role values('u2','ut1');
insert into user_n_role values('u3','ut3');
insert into user_n_role values('u3','ut1');


mysql> select *from user_n_role;
+---------+-------+
| user_id | ut_id |
+---------+-------+
| u1      | ut1   |
| u2      | ut1   |
| u3      | ut1   |
| u1      | ut2   |
| u1      | ut3   |
| u3      | ut3   |
+---------+-------+



select *from user where user_id in(
    select user_id from user_n_role
      where ut_id='ut1'and ut_id='ut2'and ut_id='ut3'); 



create table feedback(feed_id varchar(4)primary key,
                        msg varchar(200),
                        user_id varchar(4),
                        foreign key(user_id) references user(user_id));
    



    insert into feedback values('fee1','Garbage','u1');
    insert into feedback values('fee2','Construction','u1');



mysql> select *from feedback;
+---------+--------------+---------+
| feed_id | msg          | user_id |
+---------+--------------+---------+
| fee1    | Garbage      | u1      |
| fee2    | Construction | u1      |
+---------+--------------+---------+



create table complaints(com_id varchar(4)primary key,
                        user_id varchar(4),
                        descriptionn char(100),
                        dte datetime,
                        img BLOB,
                        location char,
                        foreign key(user_id)references user(user_id)    
                        );


insert into complaints(com_id,user_id,descriptionn,dte)values('com2','u1','Construction....','18-05-12 10:34:09');
insert into complaints(com_id,user_id,descriptionn,dte)values('com1','u2','CLear the garbage','18-06-12 10:34:09');


mysql> select *from complaints;
+--------+---------+-------------------+---------------------+------------+----------+
| com_id | user_id | descriptionn      | dte                 | img        | location |
+--------+---------+-------------------+---------------------+------------+----------+
| com1   | u2      | CLear the garbage | 2018-06-12 10:34:09 | NULL       | NULL     |
| com2   | u1      | Construction....  | 2018-05-12 10:34:09 | NULL       | NULL     |
+--------+---------+-------------------+---------------------+------------+----------+


create table status(sts_id varchar(4)primary key,
                      status varchar(20),
                      timee datetime,
                      com_id varchar(4),
                      user_id varchar(4),
                      foreign key(com_id)references complaints(com_id),
                      foreign key(user_id)references user(user_id)
                      ); 
                      
mysql> alter table status add feedback varchar(100);


insert into status(sts_id,status,timee,com_id,user_id) values('sts1','submitted','2018-06-12 10:34:09','com1','u1',);
insert into status(sts_id,status,timee,com_id,user_id)  values('sts2','submitted','2018-06-12 11:34:09','com2','u3');
insert into status(sts_id,status,timee,com_id,user_id) values('sts3','assigned','2019-06-12 10:34:09','com1','u1');
insert into status(sts_id,status,timee,com_id,user_id) values('sts4','rejected','2019-07-12 10:34:09','com1','u3');


mysql> select *from status;
+--------+-----------+---------------------+--------+---------+----------+
| sts_id | status    | timee               | com_id | user_id | feedback |
+--------+-----------+---------------------+--------+---------+----------+
| sts1   | submitted | 2018-06-12 10:34:09 | com1   | u1      | NULL     |
| sts2   | submitted | 2018-06-12 11:34:09 | com2   | u3      | NULL     |
| sts3   | assigned  | 2019-06-12 10:34:09 | com1   | u1      | NULL     |
| sts4   | rejected  | 2019-07-12 10:34:09 | com1   | u3      | NULL     |
+--------+-----------+---------------------+--------+---------+----------+


