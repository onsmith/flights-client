import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    userWasLoggedIn() {
      this.transitionToRoute('index');
    }
  },
});