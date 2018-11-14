import Component from '@ember/component';
import { next } from '@ember/runloop';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'section',
  classNames: ['request-log'],

  dispatcher: service(),

  isShowingDisplay: true,
  isShowingRequestLogPanel: false,

  contents: computed('messages.[]', function() {
    return this.messages.join("\n\n");
  }),

  init() {
    this._super(...arguments);
    this.clearMessages();
  },

  didInsertElement() {
    this._super(...arguments);
    this.get('dispatcher').on('request', this, this.addMessage);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('dispatcher').off('request', this, this.addMessage);
  },

  clearMessages() {
    this.set('messages', []);
  },

  addMessage(message) {
    this.get('messages').pushObject(message);
    this.refreshDisplay();
  },

  refreshDisplay() {
    this.set('isShowingDisplay', false);
    next(this, function() {
      this.set('isShowingDisplay', true);
      next(this, this.scrollToBottom);
    });
  },

  scrollToBottom() {
    const $display = this.$('.request-log-display');
    if ($display.length > 0) {
      const size = $display[0].scrollHeight;
      $display.scrollTop(size);
    }
  },

  actions: {
    actionButtonWasPressed() {
      this.set('isShowingRequestLogPanel', true);
    },

    closeButtonWasPressed() {
      this.set('isShowingRequestLogPanel', false);
    },

    clearButtonWasPressed() {
      this.clearMessages();
      this.refreshDisplay();
    },
  },
});