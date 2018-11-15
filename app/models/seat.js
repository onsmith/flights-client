import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  plane_id:   DS.attr('number'), // required
  row:        DS.attr('number'), // required
  number:     DS.attr('string'), // required
  cabin:      DS.attr('string'),
  is_window:  DS.attr('boolean'),
  is_aisle:   DS.attr('boolean'),
  is_exit:    DS.attr('boolean'),

  info:       DS.attr('string'),
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
      "plane_id":  ${JSON.stringify(this.get('plane_id'))},
      "row":       ${JSON.stringify(this.get('row'))},
      "number":    ${JSON.stringify(this.get('number'))},
      "cabin":     ${JSON.stringify(this.get('cabin'))},
      "is_window": ${JSON.stringify(this.get('is_window'))},
      "is_aisle":  ${JSON.stringify(this.get('is_aisle'))},
      "is_exit":   ${JSON.stringify(this.get('is_exit'))},
      "info":      ${JSON.stringify(this.get('info'))}
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
      "plane_id":  ${JSON.stringify(this.get('plane_id'))},
      "row":       ${JSON.stringify(this.get('row'))},
      "number":    ${JSON.stringify(this.get('number'))},
      "cabin":     ${JSON.stringify(this.get('cabin'))},
      "is_window": ${JSON.stringify(this.get('is_window'))},
      "is_aisle":  ${JSON.stringify(this.get('is_aisle'))},
      "is_exit":   ${JSON.stringify(this.get('is_exit'))},
      "info":      ${JSON.stringify(this.get('info'))}
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