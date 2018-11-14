import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  first_name:   DS.attr('string', { defaultValue: "" }), // required
  middle_name:  DS.attr('string', { defaultValue: "" }),
  last_name:    DS.attr('string', { defaultValue: "" }), // required
  age:          DS.attr('number'), // required
  gender:       DS.attr('string', { defaultValue: "" }), // required
  is_purchased: DS.attr('boolean'),
  price_paid:   DS.attr('number', { defaultValue: "" }),
  instance_id:  DS.attr('number', { defaultValue: "" }), // required
  itinerary_id: DS.attr('number', { defaultValue: "" }),
  seat_id:      DS.attr('number', { defaultValue: "" }), // required

  info:         DS.attr('string', { defaultValue: "" }),
  user_id:      DS.attr('number'),
  created_at:   DS.attr('string'),
  updated_at:   DS.attr('string'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),

  createRequestText() {
    return (
`$.ajax({
  url: '/tickets',
  type: 'POST',
  data: {
    "ticket": {
      "first_name":   "${this.get('first_name')}",
      "middle_name":  "${this.get('middle_name')}",
      "last_name":    "${this.get('last_name')}",
      "age":          ${this.get('age')},
      "gender":       "${this.get('gender')}",
      "is_purchased": ${this.get('is_purchased') ? 'true' : 'false'},
      "price_paid":   "${this.get('price_paid')}",
      "instance_id":  ${this.get('instance_id')},
      "itinerary_id": ${this.get('itinerary_id')},
      "seat_id":      ${this.get('seat_id')},
      "info":         "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/tickets/${this.get('id')}',
  type: 'PUT',
  data: {
    "ticket": {
      "first_name":   "${this.get('first_name')}",
      "middle_name":  "${this.get('middle_name')}",
      "last_name":    "${this.get('last_name')}",
      "age":          ${this.get('age')},
      "gender":       "${this.get('gender')}",
      "is_purchased": ${this.get('is_purchased') ? 'true' : 'false'},
      "price_paid":   "${this.get('price_paid')}",
      "instance_id":  ${this.get('instance_id')},
      "itinerary_id": ${this.get('itinerary_id')},
      "seat_id":      ${this.get('seat_id')},
      "info":         "${this.get('info')}"
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/tickets/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});