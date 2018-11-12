import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: ['login-section'],

  ajax: service(),

  isSubmitting: false,

  errorMessage: '',
  hasErrorMessage: notEmpty('errorMessage'),

  signup(username, password) {
    return this.get('ajax').post('/users', {
      user: { username, password },
    });
  },

  actions: {
    signupFormWasSubmitted() {
      this.set('isSubmitting', true);
      this.set('errorMessage', '');

      this.signup().then(() => {
        if (this.userWasCreated) {
          this.userWasCreated();
        }
      }).catch(reason => {
        this.set('errorMessage', reason);
      }).finally(() => {
        this.set('isSubmitting', false);
      });
    },
  },
});