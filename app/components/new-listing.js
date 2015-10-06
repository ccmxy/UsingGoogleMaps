import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save() {
      var checkIf = this.get('latitude');
      if(checkIf == undefined){
        var params = {
          //Where you put in the category to send back:
          category: this.get('category'),
          //Other details:
          title: this.get('title'),
          details: this.get('details'),
          image: this.get('image'),
          latitude: this.get('latitude'),
          longitude: this.get('longitude'),
          date_added: Date.now(),
          hasMap: false,
        };
    }
    //case it includes a map
    else{
      var params = {
        //Where you put in the category to send back:
        category: this.get('category'),
        //Other details:
        title: this.get('title'),
        details: this.get('details'),
        image: this.get('image'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        date_added: Date.now(),
        hasMap: true,
      };

    }
      this.set('addNewListing', false),
      this.sendAction('save', params);
    }
  }
});
