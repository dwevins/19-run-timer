import Ember from 'ember';
//http://tiny-tn.herokuapp.com/collections/runs-dwe
export default Ember.Route.extend({
  model() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-dwe`)
      .then((res) => res.json());
  },

  actions: {
    loading(transition, originRoute) {
      let controller = this.controllerFor('index-loading');
      controller.set('currentlyLoading', true);
      transition.promise.finally(() => {
        controller.set('currentlyLoading', false);
      });
    }
  }
});
