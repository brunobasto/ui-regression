var assert = require('assert');

// init WebdriverIO
var client = require('webdriverio').remote(
	{
		desiredCapabilities: {
			browserName: 'firefox'
		}
	}
);

// init WebdriverCSS
require('webdrivercss').init(client);

client
.init()
.url('http://google.com')
.webdrivercss('startpage', [
    {
        name: 'hplogo',
        elem: '#hplogo'
    }
], function(err, res) {
    assert.ifError(err);
    assert.ok(res.hplogo[0].isWithinMisMatchTolerance);
})
.end();