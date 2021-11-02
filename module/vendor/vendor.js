'use strict';

const vendor = require('../../eventPool');
require('../driver/driver.js');
require('../HUB');
const faker = require('faker');

let companyName = faker.company.companyName();
let client = faker.name.findName();
let Id = faker.finance.routingNumber();
let location = faker.address.streetAddress();

let handlePickUp = (payload) => console.log(`Thank you ${payload.client}`);

vendor.on('delivered', handlePickUp);

vendor.emit('pick-up', {
	store: companyName,
	orderId: Id,
	customer: client,
	address: location,
});

module.exports = handlePickUp;
