import Ember from 'ember';

export default Ember.Component.extend({
  showList: true,
  showThumbnail: false,
  actions:{
    thumbnailFormShow() {
      this.set('showList', false),
      this.set('showThumbnail', true);
    },
    listFormShow() {
      this.set('showList', true),
      this.set('showThumbnail', false);
    }
  }
});
