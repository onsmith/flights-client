import Component from '@ember/component';
import { next } from '@ember/runloop';

export default Component.extend({
  tagName: 'section',
  classNames: ['request-log'],

  isShowingRequestLogPanel: false,

  init() {
    this._super(...arguments);
    this.clearMessages();
  },

  clearMessages() {
    this.set('messages', []);
  },

  addMessage(message) {
    this.get('messages').append(message);
    next(this, function() {
      this.scrollToBottom();
    });
  },

  scrollToBottom() {
    const $display = this.$('.request-log-display');
    const size     = $display[0].scrollHeight;
    $display.scrollTop(size);
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
    },
  },
});