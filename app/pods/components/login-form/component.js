import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: ['login-section'],

  session: service(),

  isSubmitting: false,

  errorMessage: '',
  hasErrorMessage: notEmpty('errorMessage'),

  actions: {
    loginFormWasSubmitted() {
      this.set('isSubmitting', true);
      this.set('errorMessage', '');

      this.get('session').authenticate(
        this.username,
        this.password
      ).then(() => {
        if (this.userWasLoggedIn) {
          this.userLoggedIn();
        }
      }).catch(reason => {
        this.set('errorMessage', reason);
      }).finally(() => {
        this.set('isSubmitting', false);
      });
    },
  },
});