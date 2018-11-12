import Service, { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';

export default Service.extend({
  ajax: service(),

  data: null,

  isAuthenticated: notEmpty('data'),

  authenticate(username, password) {
    return this.get('ajax').post('/sessions', {
      data: { user: { username, password } },
    }).then(() => {
      this.set('data', { username });
    });
  },

  invalidate() {
    return this.get('ajax').del('/sessions').then(() => {
      this.set('data', null);
    });
  },
});