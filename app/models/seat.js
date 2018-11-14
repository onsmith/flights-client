import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  plane_id:   DS.attr('number'), // required
  row:        DS.attr('number'), // required
  number:     DS.attr('string', { defaultValue: "" }), // required
  cabin:      DS.attr('string', { defaultValue: "" }),
  is_window:  DS.attr('boolean'),
  is_aisle:   DS.attr('boolean'),
  is_exit:    DS.attr('boolean'),

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
  url: '/seats',
  type: 'POST',
  data: {
    "seat": {
      "plane_id":  ${this.get('plane_id')},
      "row":       "${this.get('row')}",
      "number":    "${this.get('number')}",
      "cabin":     "${this.get('cabin')}",
      "is_window": ${this.get('is_window') ? 'true' : 'false'},
      "is_aisle":  ${this.get('is_aisle') ? 'true' : 'false'},
      "is_exit":   ${this.get('is_exit') ? 'true' : 'false'},
      "info":      "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/seats/${this.get('id')}',
  type: 'PUT',
  data: {
    "seat": {
      "plane_id":  ${this.get('plane_id')},
      "row":       "${this.get('row')}",
      "number":    "${this.get('number')}",
      "cabin":     "${this.get('cabin')}",
      "is_window": ${this.get('is_window') ? 'true' : 'false'},
      "is_aisle":  ${this.get('is_aisle') ? 'true' : 'false'},
      "is_exit":   ${this.get('is_exit') ? 'true' : 'false'},
      "info":      "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/seats/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});