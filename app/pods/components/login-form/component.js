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
        if (reason.status == 401) {
          this.set('errorMessage', "Incorrect username or password.");
        } else if (reason.payload && reason.payload.exception) {
          this.set('errorMessage', reason.payload.exception);
        } else {
          this.set('errorMessage', reason);
        }
      }).finally(() => {
        this.set('isSubmitting', false);
      });
    },
  },
});