import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  session: service(),
  dispatcher: service(),

  beforeModel() {
    return this.get('session.isAuthenticatedPromise').then(data => {
      if (!data.is_authenticated) {
        this.transitionTo('login');
      }
    });
  },

  model() {
    this.get('dispatcher').trigger('request', this.indexRequestText());
    return this.get('store').findAll('itinerary');
  },

  indexRequestText() {
    return (
`$.ajax({
  url: '/itineraries',
  type: 'GET',
  xhrFields: { withCredentials: true }
});`
    );
  },
});