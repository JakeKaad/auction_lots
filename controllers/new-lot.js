Pennybags.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        dateOfAuction: this.get('dateOfAuction'),
        location: this.get('location'),
        description: this.get('description')
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
