import Ember from 'ember';

export default Ember.Component.extend({
  showThumbnail: false,
  actions:{
    thumbnailFormShow() {
      this.set('showThumbnail', true);
    }
  }
});
