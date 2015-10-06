import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //var name = (this.store.findRecord('category', params.category_id));

  //  window.parent.$(".name-of-category").text({{name.name}});
//  window.parent.$(".name-of-category").text(whereCategoryNameGoes);
  //  var aSingleCategory = this.store.findRecord('category', params.category_id);
    //window.parent.$(".name-of-category").text(aSingleCategory.get('name'));
/*
    return this.store.findRecord('category', params.category_id).then(function(){
      window.parent.$(".name-of-category").text(aSingleCategory.name);
    });*/
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
  destroyListing(listing) {
        listing.destroyRecord().then(function() {
          category.save();
        });
        this.transitionTo('/:category_id', params.category);
      },

    save(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      newListing.save().then(function() {
        return category.save();
      });
     //this.transitionTo(('/:question_id', params.question);
    },
  }
});
