import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel(transition) {
    return this.get('session').invalidate().then(() => {
      this.transitionTo('login');
    }).catch(() => {
      transition.abort();
    });
  },
});