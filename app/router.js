import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticate', { path: '/' });
  this.route('validate');
});

export default Router;
