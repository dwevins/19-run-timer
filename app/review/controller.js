import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToEdit(run) {
      this.transitionToRoute('new-run', run._id);
    }
  }
});
