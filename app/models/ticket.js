import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  first_name:   DS.attr('string'), // required
  middle_name:  DS.attr('string'),
  last_name:    DS.attr('string'), // required
  age:          DS.attr('number'), // required
  gender:       DS.attr('string'), // required
  is_purchased: DS.attr('boolean'),
  price_paid:   DS.attr('number'),
  instance_id:  DS.attr('number'), // required
  itinerary_id: DS.attr('number'),
  seat_id:      DS.attr('number'), // required

  info:         DS.attr('string'),
  user_id:      DS.attr('number'),
  created_at:   DS.attr('string'),
  updated_at:   DS.attr('string'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),
});