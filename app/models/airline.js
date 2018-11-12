import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  logo_url:  DS.attr('string'),

  info:      DS.attr('string'),
  userId:    DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
});