import Component from '@ember/component';
import { or } from '@ember/object/computed';

const MyComponent = Component.extend({
  tagName: 'section',
  classNames: ['record-section'],

  isUpdating: false,
  isWriting: or('record.isNew', 'isUpdating'),

  actions: {
    editButtonWasPressed() {
      this.set('isUpdating', true);
    },

    saveButtonWasPressed() {
      this.record.save();
      this.set('isUpdating', false);
    },

    cancelButtonWasPressed() {
      this.record.rollbackAttributes();
      this.set('isUpdating', false);
    },

    deleteButtonWasPressed() {
      const confirmed = confirm('Are you sure you want to delete this record?');
      if (confirmed) {
        this.record.destroyRecord();
        if (this.onDelete) {
          this.onDelete();
        }
      }
    },
  },
});

MyComponent.reopenClass({
  positionalParams: ['record'],
});

export default MyComponent;