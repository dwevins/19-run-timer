import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToEdit(run) {
      this.transitionToRoute('edit-run', run._id);
    }
  }
});
