'use strict';

const handleDelivery = require('../module/driver/driver');
const handlePickUp = require('../module/vendor/vendor');

require('../eventPool');
require('../module/HUB');
require('../module/driver/driver');
require('../module/vendor/vendor');

jest.spyOn(console, 'log');

describe('As a vendor, I want to alert the system when I have a package to be picked up.', () => {
	it('Should send an object to the HUB', () => {
		handlePickUp({ orderId: 123456 });
		expect(console.log.mock.calls.length).toEqual(1);
	});
	it('Should send an object to the HUB', () => {
		handleDelivery({ orderId: 123456 });
		expect(console.log.mock.calls.length).toEqual(2);
	});
});
