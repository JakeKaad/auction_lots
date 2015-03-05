Pennybags.NewItemController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    saveItem: function() {
      var item = this.get('model');
      item.save();
      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(item);
      lot.save();
      this.transitionToRoute('lot', lot.id);
    }
  }
});
