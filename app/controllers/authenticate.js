import Ember from 'ember';

export default Ember.Controller.extend({
  password: '',
  shouldDisplayWarning: false, // Don't warn before first attempt
  updateWarning: Ember.observer('password', function () {
    if (this.get('shouldDisplayWarning')) { this.set('shouldDisplayWarning', false); }
  }),
  actions: {
    onSubmit(password) {
      const privateKey = this.get('store').privateKey(password);
      if (privateKey) {
        this.transitionToRoute('validate');
      }
      this.set('shouldDisplayWarning', !privateKey);
    }
  }
});
