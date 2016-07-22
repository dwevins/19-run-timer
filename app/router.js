import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('review', { path: 'review/id/:id' });
  this.route('new-run');
});

export default Router;
