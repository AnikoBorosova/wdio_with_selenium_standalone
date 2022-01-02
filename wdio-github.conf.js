const sharedConfig = require("./wdio-shared.conf");

const drivers = {
	chrome: {
		version: 'latest'
	}
}

exports.config = {
	...sharedConfig,
	...{
		services: [
			['selenium-standalone', {
				logPath: 'logs',
				installArgs: { drivers }, // drivers to install
				args: { drivers } // drivers to use
			}]
		],
		reporters: ['spec']
	}
}