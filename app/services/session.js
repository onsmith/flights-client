import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

export default Service.extend({
  ajax: service(),

  data: null,
  isInitialAuthCompleted: false,

  init() {
    this._super(...arguments);
    const promise = this.get('ajax')
      .request('/users', {
        xhrFields: { withCredentials: true }
      }).then(data => {
        this.set('data', data);
      }).finally(() => {
        this.set('isInitialAuthCompleted', true);
      });
    this.set('initialAuthenticationCheck', promise);
  },

  isAuthenticated: notEmpty('data'),

  isAuthenticatedPromise: computed(
    'isAuthenticated',
    'isInitialAuthCompleted',
  function() {
    if (!this.isInitialAuthCompleted) {
      return this.get('initialAuthenticationCheck').then(() => ({
        is_authenticated: true,
        data:             this.data
      })).catch(() => ({
        is_authenticated: false,
        data:             this.data
      }));
    } else {
      return new Promise(resolve => resolve({
        is_authenticated: this.get('isAuthenticated'),
        data:             this.data
      }));
    }
  }),

  authenticate(username, password) {
    return this.get('ajax').post('/sessions', {
      xhrFields: { withCredentials: true },
      data: { user: { username, password } },
    }).then(() => {
      this.set('data', { username });
    });
  },

  invalidate() {
    return this.get('ajax').del('/sessions', {
      xhrFields: { withCredentials: true },
    }).then(() => {
      this.set('data', null);
    });
  },
});