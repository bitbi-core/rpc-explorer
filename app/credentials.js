"use strict";

const os = require('os');
const path = require('path');
const url = require('url');

const btcUri = process.env.BTBEXP_BITCOIND_URI ? url.parse(process.env.BTBEXP_BITCOIND_URI, true) : { query: { } };
const btcAuth = btcUri.auth ? btcUri.auth.split(':') : [];

module.exports = {
	rpc: {
		host: btcUri.hostname || process.env.BTBEXP_BITCOIND_HOST || "127.0.0.1",
		port: btcUri.port || process.env.BTBEXP_BITCOIND_PORT || 8332,
		username: btcAuth[0] || process.env.BTBEXP_BITCOIND_USER,
		password: btcAuth[1] || process.env.BTBEXP_BITCOIND_PASS,
		cookie: btcUri.query.cookie || process.env.BTBEXP_BITCOIND_COOKIE || path.join(os.homedir(), '.bitcoin', '.cookie'),
		timeout: parseInt(btcUri.query.timeout || process.env.BTBEXP_BITCOIND_RPC_TIMEOUT || 5000),
	},

	// optional: enter your api access key from ipstack.com below
	// to include a map of the estimated locations of your node's
	// peers
	// format: "ID_FROM_IPSTACK"
	ipStackComApiAccessKey: process.env.BTBEXP_IPSTACK_APIKEY,

	// optional: enter your api access key from mapbox.com below
	// to enable the tiles for map of the estimated locations of
	// your node's peers
	// format: "APIKEY_FROM_MAPBOX"
	mapBoxComApiAccessKey: process.env.BTBEXP_MAPBOX_APIKEY,

	// optional: GA tracking code
	// format: "UA-..."
	googleAnalyticsTrackingId: process.env.BTBEXP_GANALYTICS_TRACKING,

	// optional: sentry.io error-tracking url
	// format: "SENTRY_IO_URL"
	sentryUrl: process.env.BTBEXP_SENTRY_URL,
};
