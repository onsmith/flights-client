import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  dispatcher: service(),

  eraseRequestText() {
    return (
`$.ajax({
  url: '/data',
  type: 'DELETE',
  xhrFields: { withCredentials: true }
});`
    );
  },

  actions: {
    clearDatabaseButtonWasPressed() {
      const confirmed = confirm('Are you sure? This will permanently erase all records currently stored in your database.');
      if (confirmed) {
        this.get('dispatcher').trigger('request', this.eraseRequestText());
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