import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editRun(id) {
      const data = {
        runTime: this.model.runTime,
        raceDate: this.model.raceDate,
        raceNotes: this.model.raceNotes,
      };

      fetch (`http://tiny-tn.herokuapp.com/collections/runs-dwe/${id}`, {
        headers: {
          Accept: 'applicatiom/json',
          'Content-Type': 'application/json',
        },
        method: 'put',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((run) => {
          this.transitionToRoute('review', id);
        });
    },

    cancel(id){
      this.transitionToRoute('review', id)
    },

  }
});
