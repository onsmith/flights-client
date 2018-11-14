import Component from '@ember/component';
import { or } from '@ember/object/computed';
import { inject as service } from '@ember/service';

const MyComponent = Component.extend({
  tagName: 'section',
  classNames: ['record-section'],

  dispatcher: service(),

  isUpdating: false,
  isWriting: or('record.isNew', 'isUpdating'),

  actions: {
    editButtonWasPressed() {
      this.set('isUpdating', true);
    },

    saveButtonWasPressed() {
      if (this.get('record.isNew')) {
        this.get('dispatcher').trigger('request', this.record.createRequestText());
      } else {
        this.get('dispatcher').trigger('request', this.record.updateRequestText());
      }
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
        this.get('dispatcher').trigger('request', this.record.deleteRequestText());
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