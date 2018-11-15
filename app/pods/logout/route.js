import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  dispatcher: service(),

  beforeModel(transition) {
    this.get('dispatcher').trigger('request', this.logoutRequestText());
    return this.get('session').invalidate().then(() => {
      this.transitionTo('login');
    }).catch(() => {
      transition.abort();
    });
  },

  logoutRequestText() {
    return (
`$.ajax({
  url: '/sessions',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});