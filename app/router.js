import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // Authentication
  this.route('signup');
  this.route('login');

  // Resources
  this.route('airlines');
  this.route('airports');
  this.route('flights');
  this.route('instances');
  this.route('itineraries');
  this.route('planes');
  this.route('seats');
  this.route('tickets');
});

export default Router;
