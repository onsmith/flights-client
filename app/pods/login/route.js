import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    return this.get('session.isAuthenticatedPromise').then(data => {
      if (data.is_authenticated) {
        this.transitionTo('index');
      }
    });
  },
});