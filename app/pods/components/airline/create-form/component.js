import Component from '@ember/component';

const MyComponent = Component.extend({
  tagName: 'form',
  classNames: ['record-form'],

  actions: {
    saveButtonWasPressed() {
      this.record.save();
      if (this.onSave) {
        this.onSave();
      }
    },

    cancelButtonWasPressed() {
      this.record.rollbackAttributes();
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