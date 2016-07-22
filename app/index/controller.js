import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToReview(run) {
        this.transitionToRoute('review', run._id);
    }
  }
});
