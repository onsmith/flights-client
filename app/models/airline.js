import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name:       DS.attr('string', { defaultValue: "" }), // required
  logo_url:   DS.attr('string', { defaultValue: "" }),

  info:       DS.attr('string', { defaultValue: "" }),
  user_id:    DS.attr('number'),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),

  createRequestText() {
    return (
`$.ajax({
  url: '/airlines',
  type: 'POST',
  data: {
    "airline": {
      "name":     "${this.get('name')}",
      "logo_url": "${this.get('logo_url')}",
      "info":     "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/airlines/${this.get('id')}',
  type: 'PUT',
  data: {
    "airline": {
      "name":     "${this.get('name')}",
      "logo_url": "${this.get('logo_url')}",
      "info":     "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/airlines/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});