import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.JSONSerializer.extend({
  serializeIntoHash(data, type, snapshot, options) {
    var root = decamelize(type.modelName);
    data[root] = this.serialize(snapshot, options);
  },
});