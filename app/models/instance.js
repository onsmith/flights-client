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

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),
});