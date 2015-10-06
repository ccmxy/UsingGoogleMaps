export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(model) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(model.get('latitude'), model.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});