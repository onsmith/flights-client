import DS from 'ember-data';

export default DS.Model.extend({
  name:       DS.attr('string'),
  logo_url:   DS.attr('string'),

  info:       DS.attr('string'),
  user_id:    DS.attr('string'),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string'),
});