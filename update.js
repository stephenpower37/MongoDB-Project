// Update - Orders
db.orders.update({order_id:'A060198N'}, {$set:{order_date:'03/11/2022'}})

// Update - Tickets
db.tickets.update({ticket_id:'3J2O1N'}, {$set:{seat_number:'12'}})

// Update - Customers
db.customers.update({customer_id:'10141'}, {customer_id:'10141', first_name: 'Emily', last_name: 'McNamara', phone:'0893129223'}, {upsert:true})
