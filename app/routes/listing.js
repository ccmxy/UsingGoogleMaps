import Ember from 'ember';

export default Ember.Route.extend({
  //apparently this function doesn't need to be called "model"
  // but still must be referred to that way
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  }

});
