import Component from '@ember/component';

const MyComponent = Component.extend({
  tagName: 'form',
  classNames: ['record-form'],

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