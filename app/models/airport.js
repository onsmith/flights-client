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

  createRequestText() {
    return (
`$.ajax({
  url: '/airports',
  type: 'POST',
  data: {
    "airport": {
      "name":      ${JSON.stringify(this.get('name'))},
      "code":      ${JSON.stringify(this.get('code'))},
      "latitude":  ${JSON.stringify(this.get('latitude'))},
      "longitude": ${JSON.stringify(this.get('longitude'))},
      "city":      ${JSON.stringify(this.get('city'))},
      "state":     ${JSON.stringify(this.get('state'))},
      "city_url":  ${JSON.stringify(this.get('city_url'))},
      "info":      ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  updateRequestText() {
    return (
`$.ajax({
  url: '/airports/${this.get('id')}',
  type: 'PUT',
  data: {
    "airport": {
      "name":      ${JSON.stringify(this.get('name'))},
      "code":      ${JSON.stringify(this.get('code'))},
      "latitude":  ${JSON.stringify(this.get('latitude'))},
      "longitude": ${JSON.stringify(this.get('longitude'))},
      "city":      ${JSON.stringify(this.get('city'))},
      "state":     ${JSON.stringify(this.get('state'))},
      "city_url":  ${JSON.stringify(this.get('city_url'))},
      "info":      ${JSON.stringify(this.get('info'))}
    }
  },
  xhrFields: { withCredentials: true }
});`
    );
  },

  deleteRequestText() {
    return (
`$.ajax({
  url: '/airports/${this.get('id')}',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },
});