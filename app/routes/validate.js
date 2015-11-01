import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(/*transition*/) {
    const privateKey = this.get('store').privateKey();
    if (!privateKey) {
      this.transitionTo('authenticate');
      return false;
    }
    return true;
  }
});
