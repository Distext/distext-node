var request = require('request');

module.exports = function(apiKey){

	return {

		send: function(destination, text, callback){
			request({
				uri: 'http://distext.wavy.be/api/sms',
				method: 'POST',
				headers: {
					'X-Auth-Token': apiKey
				},
				json: {
					"destination": destination,
					"text": text,
				}
			}, function (error, response, body) {
				if(!callback) {
					return;
				}
				if (!error && response.statusCode == 204) {
					callback(true);
					return;
				}
				if (response.statusCode == 401) {
					callback(false, 'Invalid API key');
					return;
				}
				callback(false, error);
			});
		}

	};

};