'use strict';

const vendor = require('../../eventPool');
require('../driver/driver.js');
require('../HUB');
const faker = require('faker');

let companyName = faker.company.companyName();
let client = faker.name.findName();
let Id = faker.finance.routingNumber();
let location = faker.address.streetAddress();

vendor.on('delivered', (payload) =>
	console.log(`Thank you ${payload.orderId}`)
);

vendor.emit('pick-up', {
	store: companyName,
	orderId: Id,
	customer: client,
	address: location,
});
