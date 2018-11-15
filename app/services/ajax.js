import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'flights-client/config/environment';

export default AjaxService.extend({
  host: ENV['host'],
});