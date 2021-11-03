'use strict';

const faker = require('faker');

const client = require('socket.io-client');
const caps = client.connect('http://localhost:3030/caps');

// let companyName = faker.company.companyName();
let companyName = '1-206-flowers';
let customerName = faker.name.findName();
let Id = faker.finance.routingNumber();
let location = faker.address.streetAddress();

let handlePickUp = (payload) => console.log(`Thank you ${payload.customer}`);

caps.emit('join', companyName);

caps.on('delivered', handlePickUp);

caps.emit('pick-up', {
	store: companyName,
	orderId: Id,
	customer: customerName,
	address: location,
});

module.exports = handlePickUp;
