import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const MyComponent = Component.extend({
  tagName: 'form',
  classNames: ['record-form'],

  store: service(),

  planes: computed(
  function() {
    return this.get('store').findAll('plane');
  }),

  actions: {
    saveButtonWasPressed() {
      if (this.onSave) {
        this.onSave();
      }
    },

    cancelButtonWasPressed() {
      if (this.onCancel) {
        this.onCancel();
      }
    },
  },
});

MyComponent.reopenClass({
  positionalParams: ['record'],
});

export default MyComponent;