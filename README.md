# Distext client for Node

Installation:
npm install --save distext

Usage example
```javascript
var distext = require('distext')('pasteYourApiKeyHere');

distext.send('0123456789', 'your message here', function(success, error){
	if(success) {
		console.log('Message was sent successfully');
	} else {
		console.log('An error occured: ' + error);
	}
});
```