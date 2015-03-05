Pennybags.LotController = Ember.ObjectController.extend({
  // itemController: 'item'
  actions: {
    deleteItem: function(item) {
      var lot = this.get('model');
      lot.get('items').removeObject(item);
      lot.save();
      item.destroyRecord();
    }
  }
});


// Yesterday's code: Pennybags.LotContoller = Ember.ObjectController.extend({
//
// });
