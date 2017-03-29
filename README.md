# payumoney-shakey

install: 
` npm install -g payumoney-shakey ` 

Do: 
`var payumoney_shakey = require('payumoney-shakey'); `

and use it :

  `payumoney_shakey.make().base(key, txnid, amount, productinfo, firstname, email, salt);`
  
 and take a look at the hash:
 
 ```
 var hash = payumoney_shakey.make().base(key, txnid, amount, productinfo, firstname, email, salt);
    console.log(hash);
```
 hash should contain a string value something like below:
 `"5c4cf557ab390aa923cb81fee82701478caf0807fb63e9b789d54171e32124a537d906f4874e646f0bb780cbfae799a6bc003c177a29e7a91da01dff681acdf9"`
