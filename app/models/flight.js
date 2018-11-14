import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  departs_at:     DS.attr('string', { defaultValue: "" }), // required
  arrives_at:     DS.attr('string', { defaultValue: "" }), // required
  number:         DS.attr('string', { defaultValue: "" }), // required
  plane_id:       DS.attr('number'),
  departure_id:   DS.attr('number'), // required
  arrival_id:     DS.attr('number'), // required
  next_flight_id: DS.attr('number'),
  airline_id:     DS.attr('number'),

  info:           DS.attr('string', { defaultValue: "" }),
  user_id:        DS.attr('number'),
  created_at:     DS.attr('string'),
  updated_at:     DS.attr('string'),

  plane:          DS.belongsTo('plane'),
  departure:      DS.belongsTo('airport'),
  arrival:        DS.belongsTo('airport'),
  next_flight:    DS.belongsTo('flight'),
  airline:        DS.belongsTo('airline'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),

  createRequestText() {
    return (
`$.ajax({
  url: '/flights',
  type: 'POST',
  data: {
    "flight": {
      "departs_at":     "${this.get('departs_at')}",
      "arrives_at":     "${this.get('arrives_at')}",
      "number":         "${this.get('number')}",
      "plane_id":       ${this.get('plane_id')},
      "departure_id":   ${this.get('departure_id')},
      "arrival_id":     ${this.get('arrival_id')},
      "next_flight_id": ${this.get('next_flight_id')},
      "airline_id":     ${this.get('airline_id')},
      "info":           "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/flights/${this.get('id')}',
  type: 'PUT',
  data: {
    "flight": {
      "departs_at":     "${this.get('departs_at')}",
      "arrives_at":     "${this.get('arrives_at')}",
      "number":         "${this.get('number')}",
      "plane_id":       ${this.get('plane_id')},
      "departure_id":   ${this.get('departure_id')},
      "arrival_id":     ${this.get('arrival_id')},
      "next_flight_id": ${this.get('next_flight_id')},
      "airline_id":     ${this.get('airline_id')},
      "info":           "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/flights/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});