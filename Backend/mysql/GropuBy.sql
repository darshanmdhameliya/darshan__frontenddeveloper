14-12-2024 Friday

1. Exercises on using Having and Group By Clauses:


a. Print the description and total qty sold for each product.

==>
select description ,order_status , qty_on_hand  from product_master ,sales_order
where order_status = "fulfilled"
Group by order_status
Having sum(qty_on_hand);


b. Find the value of each product sold.
c. Calculate the average qty sold for each client that has a maximum order value of 15000.00.
d. Find out the total of all the billed orders for the month of June.
