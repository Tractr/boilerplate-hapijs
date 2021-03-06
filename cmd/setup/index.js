'use strict';

const ServerWrapper = require('../inc/server-wrapper');
const Helpers = require('../inc/helpers')(__filename);
const DatabaseSetup = require('./database');
const S3 = require('./s3');

ServerWrapper.init()
	.then(DatabaseSetup)
	.then(S3)
	.then(server => {
		Helpers.logAndClose(server)('Did finished setup.');
	})
	.catch(Helpers.errorAndClose());
