import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel() {
      debugger;

    },

    addRun() {
      const data = {
        runTime: this.runTime,
        raceDate: this.raceDate,
        raceNotes: this.raceNotes,
      };

      fetch('http://tiny-tn.herokuapp.com/collections/runs-dwe', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(data),
      });
      this.transitionToRoute('/')
    },
  }
});
