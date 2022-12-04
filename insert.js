// Orders - Insert 1
db.orders.insertOne(
    {
      "order_id" : 'Y458912X',
      "customer_id" : '34329',
      "order_date" : '01/11/2022',
      "ticket_quantity" : 2,
      "tickets" : [
        { "ticket_id" : "9K5L2N", "seat_number" : '103', "price" : 75 },
        { "ticket_id" : "5X9L1N", "seat_number" : '104', "price" : 75 }
      ]
    }
  )
  
  // Orders - Insert 2
  db.orders.insertOne(
    {
      "order_id" : 'M932001T',
      "customer_id" : '34329',
      "order_date" : '04/11/2022',
      "ticket_quantity" : 1,
      "tickets" : [
        { "ticket_id" : "3J2O1N", "seat_number" : '11', "price" : 45 }
      ]
    }
  )
  
  // Orders - Insert 3
  db.orders.insertOne(
    {
      "order_id" : 'A060198N',
      "customer_id" : '71909',
      "order_date" : '02/11/2022',
      "ticket_quantity" : 4,
      "tickets" : [
        { "ticket_id" : "8N3L4M", "seat_number" : '84', "price" : 55 },
        { "ticket_id" : "9K1M0L", "seat_number" : '85', "price" : 55 },
        { "ticket_id" : "7B4S3N", "seat_number" : '86', "price" : 55 },
        { "ticket_id" : "1A2H0B", "seat_number" : '87', "price" : 55 }
      ]
    }
  )
  
  // Orders - Insert 4
  db.orders.insertOne(
    {
      "order_id" : 'P890176K',
      "customer_id" : '71909',
      "order_date" : '03/11/2022',
      "ticket_quantity" : 1,
      "tickets" : [
        { "ticket_id" : "9L0P1Z", "seat_number" : '44', "price" : 20 }
      ]
    }
  )
  
  // Orders - Insert 5
  db.orders.insertOne(
    {
      "order_id" : 'A202278B',
      "customer_id" : '71909',
      "order_date" : '10/11/2022',
      "ticket_quantity" : 2,
      "tickets" : [
        { "ticket_id" : "8J4N7Z", "seat_number" : '167', "price" : 95 },
        { "ticket_id" : "1M0Z5V", "seat_number" : '168', "price" : 95 }
      ]
    }
  )
  
  // Customers - Insert 1
  db.customers.insertOne(
    {
      "customer_id" : '34329',
      "first_name" : 'John',
      "last_name" : 'McCarthy',
      "phone" : '0838920964',
      "email" : 'johnmac1984@gmail.com',
      "address" : '64, Oakmont Crescent, Waterford City, Co. Waterford',
      "payment_details" : { "card_number" : '4319543076117818', "card_expiry" : "08/25", "card_cvc" : "546" },
      "orders" : [
        { "order_id" : "Y458912X", "order_date" : '01/11/2022' },
        { "order_id" : "M932001T", "order_date" : '04/11/2022' }
      ]
    }
  )
  
  // Customers - Insert 2
  db.customers.insertOne(
    {
      "customer_id" : '71909',
      "first_name" : 'Leah',
      "last_name" : 'Walsh',
      "phone" : '0850781811',
      "email" : 'leahwalsh2022@gmail.com',
      "address" : '101, Maple Avenue, Tramore, Co. Waterford',
      "payment_details" : { "card_number" : '3901782138710912', "card_expiry" : "01/29", "card_cvc" : "633" },
      "orders" : [
        { "order_id" : "A060198N", "order_date" : '02/11/2022' },
        { "order_id" : "P890176K", "order_date" : '03/11/2022' },
        { "order_id" : "A202278B", "order_date" : '10/11/2022' }
      ]
    }
  )
  
  // Tickets - Insert 1
  db.tickets.insertOne(
    {
      "ticket_id" : '9K5L2N',
      "seat_number" : '103',
      "price" : 75,
      "event" : { "event_id" : '431954', "event_date" : "11/12/2022", "name" : "Capital FM Jingle Bell Ball" },
      "venue" : { "name" : '02 Arena', "address" : "Peninsula Square, London", "email" : "02londonevents@help.co.uk" }
    }
  )
  
  // Tickets - Insert 2
  db.tickets.insertOne(
    {
      "ticket_id" : '5X9L1N',
      "seat_number" : '104',
      "price" : 75,
      "event" : { "event_id" : '431954', "event_date" : "11/12/2022", "name" : "Capital FM Jingle Bell Ball" },
      "venue" : { "name" : '02 Arena', "address" : "Peninsula Square, London", "email" : "02londonevents@help.co.uk" }
    }
  )
  
  // Tickets - Insert 3
  db.tickets.insertOne(
    {
      "ticket_id" : '3J2O1N',
      "seat_number" : '11',
      "price" : 45,
      "event" : { "event_id" : '981273', "event_date" : "23/11/2022", "name" : "Oliver Tree" },
      "venue" : { "name" : '3Olympia Theatre', "address" : "Temple Bar, Dublin", "email" : "3olympiadublin@help.ie" }
    }
  )
  
  // Tickets - Insert 4
  db.tickets.insertOne(
    {
      "ticket_id" : '8N3L4M',
      "seat_number" : '84',
      "price" : 55,
      "event" : { "event_id" : '801655', "event_date" : "31/12/2022", "name" : "Liverpool FC v Leicester City" },
      "venue" : { "name" : 'Anfield Stadium', "address" : "Anfield Rd, Liverpool", "email" : "lfc@help.co.uk" }
    }
  )
  
  // Tickets - Insert 5
  db.tickets.insertOne(
    {
      "ticket_id" : '9K1M0L',
      "seat_number" : '85',
      "price" : 55,
      "event" : { "event_id" : '801655', "event_date" : "31/12/2022", "name" : "Liverpool FC v Leicester City" },
      "venue" : { "name" : 'Anfield Stadium', "address" : "Anfield Rd, Liverpool", "email" : "lfc@help.co.uk" }
    }
  )
  
  // Tickets - Insert 6
  db.tickets.insertOne(
    {
      "ticket_id" : '7B4S3N',
      "seat_number" : '86',
      "price" : 55,
      "event" : { "event_id" : '801655', "event_date" : "31/12/2022", "name" : "Liverpool FC v Leicester City" },
      "venue" : { "name" : 'Anfield Stadium', "address" : "Anfield Rd, Liverpool", "email" : "lfc@help.co.uk" }
    }
  )
  
  // Tickets - Insert 7
  db.tickets.insertOne(
    {
      "ticket_id" : '1A2H0B',
      "seat_number" : '87',
      "price" : 55,
      "event" : { "event_id" : '801655', "event_date" : "31/12/2022", "name" : "Liverpool FC v Leicester City" },
      "venue" : { "name" : 'Anfield Stadium', "address" : "Anfield Rd, Liverpool", "email" : "lfc@help.co.uk" }
    }
  )
  
  // Tickets - Insert 8
  db.tickets.insertOne(
    {
      "ticket_id" : '9L0P1Z',
      "seat_number" : '44',
      "price" : 20,
      "event" : { "event_id" : '781222', "event_date" : "14/11/2022", "name" : "Extra.ie FAI Cup Final" },
      "venue" : { "name" : 'Aviva Stadium', "address" : "Lansdowne Rd, Dublin", "email" : "avivastadium@help.ie" }
    }
  )
  
  // Tickets - Insert 9
  db.tickets.insertOne(
    {
      "ticket_id" : '8J4N7Z',
      "seat_number" : '167',
      "price" : 95,
      "event" : { "event_id" : '120823', "event_date" : "30/11/2022", "name" : "Florence + The Machine" },
      "venue" : { "name" : '3 Arena', "address" : "North Dock, Dublin", "email" : "3arenaevents@help.ie" }
    }
  )
  
  // Tickets - Insert 10
  db.tickets.insertOne(
    {
      "ticket_id" : '1M0Z5V',
      "seat_number" : '168',
      "price" : 95,
      "event" : { "event_id" : '120823', "event_date" : "30/11/2022", "name" : "Florence + The Machine" },
      "venue" : { "name" : '3 Arena', "address" : "North Dock, Dublin", "email" : "3arenaevents@help.ie" }
    }
  )