'use strict';

const { moduleExpression } = require('@babel/types');
const driver = require('../../eventPool');
require('../vendor/vendor.js');
require('../HUB');

// -------------------------- Testing

let handleDelivery = (payload) => {
	console.log(`DRIVER: picked up ${payload.orderId}`);
	driver.emit('in-transit', payload);
	driver.emit('delivered', payload);
};

driver.on('pick-up', handleDelivery);

module.exports = handleDelivery;
