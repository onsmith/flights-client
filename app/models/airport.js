import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name:       DS.attr('string', { defaultValue: "" }), // required
  code:       DS.attr('string', { defaultValue: "" }), // required
  longitude:  DS.attr('string', { defaultValue: "" }),
  latitude:   DS.attr('string', { defaultValue: "" }),
  city:       DS.attr('string', { defaultValue: "" }),
  state:      DS.attr('string', { defaultValue: "" }),
  city_url:   DS.attr('string', { defaultValue: "" }),

  info:       DS.attr('string', { defaultValue: "" }),
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
      "name":      "${this.get('name')}",
      "code":      "${this.get('code')}",
      "latitude":  "${this.get('latitude')}",
      "longitude": "${this.get('longitude')}",
      "city":      "${this.get('city')}",
      "state":     "${this.get('state')}",
      "city_url":  "${this.get('city_url')}",
      "info":      "${this.get('info')}"
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
      "name":      "${this.get('name')}",
      "code":      "${this.get('code')}",
      "latitude":  "${this.get('latitude')}",
      "longitude": "${this.get('longitude')}",
      "city":      "${this.get('city')}",
      "state":     "${this.get('state')}",
      "city_url":  "${this.get('city_url')}",
      "info":      "${this.get('info')}"
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