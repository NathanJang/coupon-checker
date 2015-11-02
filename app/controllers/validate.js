import Ember from 'ember';
import hmac from 'coupon/utils/hmac';

export default Ember.Controller.extend({
  couponId: '',
  hash: '',
  clearHash: Ember.observer('couponId', function () {
    this.set('hash', '');
  }),
  couponIdIsInvalid: Ember.computed('couponId', function () {
    const couponId = this.get('couponId');
    if (typeof couponId !== 'string') { return true; }
    if (couponId === '') { return false; } // It's not invalid initially
    return !couponId.match(/^10[0-9A-Fa-f]{3}$/);
  }),
  actions: {
    onSubmit(couponId) {
      if (!couponId) { return; }
      if (this.get('couponIdIsInvalid')) { return; }
      const privateKey = this.get('store').privateKey(); // Assuming it's already there
      const result = hmac(sjcl, privateKey, couponId);
      this.set('hash', result);
    }
  }
});
