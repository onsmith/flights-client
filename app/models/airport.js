import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name:       DS.attr('string'), // required
  code:       DS.attr('string'), // required
  longitude:  DS.attr('string'),
  latitude:   DS.attr('string'),
  city:       DS.attr('string'),
  state:      DS.attr('string'),
  city_url:   DS.attr('string'),

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