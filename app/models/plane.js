import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name:        DS.attr('string', { defaultValue: "" }),
  seatmap_url: DS.attr('string', { defaultValue: "" }),
  airline_id:  DS.attr('number'),

  info:        DS.attr('string', { defaultValue: "" }),
  user_id:     DS.attr('number'),
  created_at:  DS.attr('string'),
  updated_at:  DS.attr('string'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),

  createRequestText() {
    return (
`$.ajax({
  url: '/planes',
  type: 'POST',
  data: {
    "plane": {
      "name":        ${JSON.stringify(this.get('name'))},
      "seatmap_url": ${JSON.stringify(this.get('seatmap_url'))},
      "airline_id":  ${JSON.stringify(this.get('airline_id'))},
      "info":        ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/planes/${this.get('id')}',
  type: 'PUT',
  data: {
    "plane": {
      "name":        ${JSON.stringify(this.get('name'))},
      "seatmap_url": ${JSON.stringify(this.get('seatmap_url'))},
      "airline_id":  ${JSON.stringify(this.get('airline_id'))},
      "info":        ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/planes/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});