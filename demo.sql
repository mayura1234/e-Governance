
/* User creates  an account then the details are stored here.
   To avoid redundancy we are not including usertype column in user table,
   instead we are maintaining a seperate table called user_type.
   
   We have another table user_n_role which contains prime attributes of first 2 tables,
   so that it will solve the problem - "1 user,multiple roles."*/

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



mysql> select *from role;
+-------+----------+
| ut_id | usr_type |
+-------+----------+
| ut1   | USR      |
| ut2   | GRO      |
| ut3   | RO       |
+-------+----------+

mysql> select *from user_n_role;
+---------+-------+
| user_id | ut_id |
+---------+-------+
| u1      | ut1   |
| u2      | ut1   |
| u1      | ut2   |
| u1      | ut3   |
| u3      | ut3   |
+---------+-------+


/*  In complaints table, complaints given by the user are stored.*/

mysql> select *from complaints;
+--------+---------+-------------------+---------------------+------------+----------+
| com_id | user_id | descriptionn      | dte                 | img        | location |
+--------+---------+-------------------+---------------------+------------+----------+
| com1   | u2      | CLear the garbage | 2018-06-12 10:34:09 | NULL       | NULL     |
| com2   | u1      | Construction....  | 2018-05-12 10:34:09 | NULL       | NULL     |
+--------+---------+-------------------+---------------------+------------+----------+




/* Once the GRO assigns the task, then status of that complaint will be "assigned".
If it is rejected, then the status will be "rejected".
When the status is assigned, RO will get the details of the complaints..
Once complaint is Solved by RO, then the status will be "Success".  */



mysql> select *from status;
+--------+-----------+---------------------+--------+---------+----------+
| sts_id | status    | timee               | com_id | user_id | feedback |
+--------+-----------+---------------------+--------+---------+----------+
| sts1   | submitted | 2018-06-12 10:34:09 | com1   | u1      | NULL     |
| sts2   | submitted | 2018-06-12 11:34:09 | com2   | u3      | NULL     |
| sts3   | assigned  | 2019-06-12 10:34:09 | com1   | u1      | NULL     |
| sts4   | rejected  | 2019-07-12 10:34:09 | com1   | u3      | NULL     |
+--------+-----------+---------------------+--------+---------+----------+
