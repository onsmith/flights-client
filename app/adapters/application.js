import DS from 'ember-data';
import ENV from 'flights-client/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV['host'],

  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {
      withCredentials: true,
    };
    return this._super(url, method, hash);
  },
});