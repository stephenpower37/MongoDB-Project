// Find Query 1
db.orders.find({ticket_quantity:1}).pretty()

// Find Query 2
db.customers.find( { email:{$in:['leahwalsh2022@gmail.com',ObjectId("6374e6880eafe91a5c55033c")]} }).pretty()

// Find Query 3
db.tickets.find({$and: [{price: 95}, {ticket_id: '1M0Z5V'}]}).pretty()

// Find Query 4
db.tickets.find({ price:{ $lte: 45 } }).pretty()

// Find Query 5
db.orders.find({ customer_id: '71909', tickets: { $elemMatch: { price: 55 } } }).pretty()
