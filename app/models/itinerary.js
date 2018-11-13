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
});