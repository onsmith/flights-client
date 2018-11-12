import Service, { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';

export default Service.extend({
  ajax: service(),

  data: null,

  isAuthenticated: notEmpty('data'),

  authenticate(username, password) {
    const data = { username, password };
    return this.get('ajax').post('/sessions', {
      data: { user: data },
    }).then(() => {
      this.set('data', data);
    });
  },

  invalidate() {
    return this.get('ajax').del('/sessions');
  },
});