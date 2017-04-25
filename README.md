# payumoney-shakey

[![NPM](https://nodei.co/npm/payumoney-shakey.png?downloads=true)](https://nodei.co/npm/payumoney-shakey/)

 [![NPM](https://nodei.co/npm-dl/payumoney-shakey.png?months=3&height=3)](https://nodei.co/npm/payumoney-shakey/)

 

install: 
	` npm install -g payumoney-shakey ` 

Do: 
		`var payumoney_shakey = require('payumoney-shakey'); `

and use it :

  `payumoney_shakey.make().basic(key, txnid, amount, productinfo, firstname, email, salt);`
  
 and take a look at the hash:
 
 ```
 var hash = payumoney_shakey.make().basic(key, txnid, amount, productinfo, firstname, email, salt);
    console.log(hash);
```
 hash should contain a string value something like below:
 `"5c4cf557ab390aa923cb81fee82701478caf0807fb63e9b789d54171e32124a537d906f4874e646f0bb780cbfae799a6bc003c177a29e7a91da01dff681acdf9"`
 
 will add more function Soon. 
 we are working on it.
