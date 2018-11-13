import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  departs_at:     DS.attr('string'), // required
  arrives_at:     DS.attr('string'), // required
  number:         DS.attr('string'), // required
  plane_id:       DS.attr('number'),
  departure_id:   DS.attr('number'), // required
  arrival_id:     DS.attr('number'), // required
  next_flight_id: DS.attr('number'),
  airline_id:     DS.attr('number'),

  info:           DS.attr('string'),
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
});