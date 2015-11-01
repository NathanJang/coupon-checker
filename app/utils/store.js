import Ember from 'ember';
import ENV from 'coupon/config/environment';

export default Ember.Object.extend({
  encryptedPrivateKey: ENV.APP.encryptedPrivateKey,
  decryptedPrivateKey: null,

  privateKey(password) {
    var decryptedPrivateKey = this.get('decryptedPrivateKey');
    if (decryptedPrivateKey) { return decryptedPrivateKey; }

    if (!password) { return false; } // Assuming non-blank password

    // TODO: Cryptographic magic
    Ember.Logger.debug('Decrypting private key.');
    try {
      decryptedPrivateKey = sjcl.json.decrypt(password, this.get('encryptedPrivateKey'));
    } catch (e) {
      if (e instanceof sjcl.exception.corrupt) {
        // Invalid password
        return false;
      } else { throw e; }
    }

    this.set('decryptedPrivateKey', decryptedPrivateKey);
    return decryptedPrivateKey;
  }
});
