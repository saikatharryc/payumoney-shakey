/**
 * @param {Object} req Request Object
 * @param {Object} res Response Object
 * @returns
 */
exports.make = function(req, res) {
  return {
    /**
     * @param {String} key
     * @param {String} txnid
     * @param {Number | String} amount
     * @param {String} productinfo
     * @param {String} firstname
     * @param {String} email
     * @param {String} salt
     * @returns sha-key
     */
    basic: function(key, txnid, amount, productinfo, firstname, email, salt) {
      var shasum = crypto.createHash("sha512"),
        dataSequence =
          key +
          "|" +
          txnid +
          "|" +
          amount +
          "|" +
          productinfo +
          "|" +
          firstname +
          "|" +
          email +
          "|||||||||||" +
          salt;

      var resultKey = shasum.update(dataSequence).digest("hex");
      var data = JSON.stringify(resultKey);
      return data;
    }
  };
};
