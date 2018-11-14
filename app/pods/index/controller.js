import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),

  actions: {
    clearDatabaseButtonWasPressed() {
      const confirmed = confirm('Are you sure? This will permanently erase all records currently stored in your database.');
      if (confirmed) {
        return this.get('ajax').del('/data', {
          xhrFields: { withCredentials: true },
        }).then(() => {
          alert('Your database has been erased.');
        }).catch(() => {
          alert('Something went wrong and your database was not erased.')
        });
      }
    },
  },
});