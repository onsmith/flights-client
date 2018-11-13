import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name:        DS.attr('string'),
  seatmap_url: DS.attr('string'),
  airline_id:  DS.attr('number'),

  info:        DS.attr('string'),
  user_id:     DS.attr('number'),
  created_at:  DS.attr('string'),
  updated_at:  DS.attr('string'),

  intid: computed(
    'id',
  function() {
    return parseInt(this.id, 10);
  }),
});