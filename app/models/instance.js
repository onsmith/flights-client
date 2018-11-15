import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  flight_id:    DS.attr('number'), // required
  date:         DS.attr('string'),
  is_cancelled: DS.attr('boolean'),

  info:         DS.attr('string'),
  user_id:      DS.attr('number'),
  created_at:   DS.attr('string'),
  updated_at:   DS.attr('string'),

  flight: computed(
    'flight_id',
  function() {
    const flight_id = this.get('flight_id');
    if (flight_id) {
      return this.store.findRecord('flight', flight_id);
    } else {
      return null;
    }
  }),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),

  createRequestText() {
    return (
`$.ajax({
  url: '/instances',
  type: 'POST',
  data: {
    "instance": {
      "flight_id":    ${JSON.stringify(this.get('flight_id'))},
      "date":         ${JSON.stringify(this.get('date'))},
      "is_cancelled": ${JSON.stringify(this.get('is_cancelled'))},
      "info":         ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/instances/${this.get('id')}',
  type: 'PUT',
  data: {
    "instance": {
      "flight_id":    ${JSON.stringify(this.get('flight_id'))},
      "date":         ${JSON.stringify(this.get('date'))},
      "is_cancelled": ${JSON.stringify(this.get('is_cancelled'))},
      "info":         ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/instances/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});