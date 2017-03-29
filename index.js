var crypto = require('crypto');
exports.make = function(req,res) {
    return {
        basic : function(key, txnid, amount, productinfo, firstname, email, salt) {
            var shasum = crypto.createHash('sha512'),
            dataSequence = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|||||||||||' + salt;
            var resultKey = shasum.update(dataSequence).digest('hex');
            var data = JSON.stringify(resultKey);
            return data;       
        }
    };
}
