import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';
import Component from '@ember/component';
import { isBadRequestError, isUnauthorizedError } from 'ember-ajax/errors';

export default Component.extend({
  tagName: 'section',
  classNames: ['login-section'],

  session: service(),
  dispatcher: service(),

  isSubmitting: false,

  errorMessage: '',
  hasErrorMessage: notEmpty('errorMessage'),

  loginRequestText() {
    return (
`$.ajax({
  url: '/sessions',
  type: 'POST',
  data: {
    "user": {
      "username": ${JSON.stringify(this.username)},
      "password": ${JSON.stringify(this.password)}
    }
  },
  xhrFields: { withCredentials: true }
});`);
  },

  actions: {
    loginFormWasSubmitted() {
      this.set('isSubmitting', true);
      this.set('errorMessage', '');

      this.get('dispatcher').trigger('request', this.loginRequestText());

      this.get('session').authenticate(
        this.username,
        this.password
      ).then(() => {
        if (this.userWasLoggedIn) {
          this.userWasLoggedIn();
        }
      }).catch(error => {
        if (isBadRequestError(error)) {
          this.set('errorMessage', 'Username and password are required fields.');
        } else if (isUnauthorizedError(error)) {
          this.set('errorMessage', 'Incorrect username or password.');
        } else if (error.payload && error.payload.exception) {
          this.set('errorMessage', error.payload.exception);
        } else {
          this.set('errorMessage', error);
        }
      }).finally(() => {
        this.set('isSubmitting', false);
      });
    },
  },
});