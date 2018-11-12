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
});

export default Router;
