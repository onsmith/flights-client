import Component from '@ember/component';
import { equal } from '@ember/object/computed';

const MyComponent = Component.extend({
  tagName: 'section',
  classNames: ['record-section'],

  mode: 'read', // valid values are 'create', 'read', or 'update'
  isInCreateMode: equal('mode', 'create'),
  isInReadMode:   equal('mode', 'read'),
  isInUpdateMode: equal('mode', 'update'),

  actions: {
    editButtonWasPressed() {
      this.set('mode', 'update');
    },

    deleteButtonWasPressed() {
      confirm('Are you sure you want to delete this record?');
    },
  },
});

MyComponent.reopenClass({
  positionalParams: ['record'],
});

export default MyComponent;