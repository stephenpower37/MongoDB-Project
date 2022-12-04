// Aggregation - Sort
db.orders.aggregate([{
    $project: { "_id": 0, "order_id": 1,"ticket_quantity": 1 }
  }, {
    $sort: { "ticket_quantity": -1 }
  }])
  
  // Aggregation - Sum
  db.tickets.aggregate([
    { $group: {_id: "Tickets", "noTickets": { $sum: 1 }
    } }
  ])
  
  // Aggregation - Lookup
  db.customers.aggregate([
    {
      $match: {customer_id: "34329"}
    },
    {
      $lookup: {from: "orders", foreignField: "customer_id", localField: "customer_id", as: "orders"}
    }
  ]).pretty()