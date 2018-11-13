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
});