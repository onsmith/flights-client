import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';
import Component from '@ember/component';
import { isBadRequestError } from 'ember-ajax/errors';

export default Component.extend({
  tagName: 'section',
  classNames: ['login-section'],

  ajax: service(),

  isSubmitting: false,
  isShowingSuccessMessage: false,

  errorMessage: '',
  isShowingErrorMessage: notEmpty('errorMessage'),

  signup(username, password) {
    return this.get('ajax').post('/users', {
      data: {
        user: { username, password },
      },
    });
  },

  clearForm() {
    this.set('username', '');
    this.set('password', '');
  },

  actions: {
    signupFormWasSubmitted() {
      this.set('isSubmitting', true);
      this.set('errorMessage', '');
      this.set('isShowingSuccessMessage', false);

      this.signup(this.username, this.password).then(() => {
        this.set('isShowingSuccessMessage', true);
        this.clearForm();
        if (this.userWasCreated) {
          this.userWasCreated();
        }
      }).catch(error => {
        if (isBadRequestError(error)) {
          this.set('errorMessage', 'Username and password are required fields.');
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