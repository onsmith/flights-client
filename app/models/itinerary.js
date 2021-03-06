import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  confirmation_code: DS.attr('string'),
  email:             DS.attr('string'),

  info:              DS.attr('string'),
  user_id:           DS.attr('number'),
  created_at:        DS.attr('string'),
  updated_at:        DS.attr('string'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),

  createRequestText() {
    return (
`$.ajax({
  url: '/itineraries',
  type: 'POST',
  data: {
    "itinerary": {
      "confirmation_code": ${JSON.stringify(this.get('confirmation_code'))},
      "email":             ${JSON.stringify(this.get('email'))},
      "info":              ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/itineraries/${this.get('id')}',
  type: 'PUT',
  data: {
    "itinerary": {
      "confirmation_code": ${JSON.stringify(this.get('confirmation_code'))},
      "email":             ${JSON.stringify(this.get('email'))},
      "info":              ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/itineraries/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});