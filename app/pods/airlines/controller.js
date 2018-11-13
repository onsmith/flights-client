import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  byAge: Object.freeze(['isNew:desc', 'id:desc']),
  records: sort('model', 'byAge'),

  actions: {
    createButtonWasPressed() {
      this.get('store').createRecord('airline');
    },
  },
});