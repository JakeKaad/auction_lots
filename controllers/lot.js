Pennybags.LotController = Ember.ObjectController.extend({
  notCreatingItem: true,
  actions: {
    deleteItem: function(item) {
      if(confirm('Are you sure?')) {
        var lot = this.get('model');
        lot.get('items').removeObject(item);
        lot.save();
        item.destroyRecord();
      }
    },
    deleteLot: function() {
      if(confirm('Are you sure?')) {
        var lot = this.get('model');
        lot.destroyRecord();
        this.transitionToRoute('lots');
      }
    },
    edit: function() {
      this.set('isEditingLot', true);
    },
    save: function() {
      var lot = this.get('model');
      lot.save();
      this.set('isEditingLot', false);
    },
    creatingItem: function() {
      // this.toggleProperty('notCreatingItem');
      this.transitionToRoute("new-item")
    },
    savedItem: function() {
      this.set('notCreatingItem', true);
    }
  }
});
