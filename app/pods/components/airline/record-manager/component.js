import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

const MyComponent = Component.extend({
  tagName: 'section',
  classNames: ['record-section'],

  isUpdating: false,

  mode: computed(
    'isUpdating',
    'record.isNew',
  function() {
    if (this.get('record.isNew')) {
      return 'create';
    } else if (this.isUpdating) {
      return 'update';
    } else {
      return 'read';
    }
  }),

  isInCreateMode: equal('mode', 'create'),
  isInReadMode:   equal('mode', 'read'),
  isInUpdateMode: equal('mode', 'update'),

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