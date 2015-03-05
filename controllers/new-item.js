Pennybags.NewItemController = Ember.ObjectController.extend({
  needs: ['lot'],
  notCreatingItem: false,
  actions: {
    saveItem: function() {
      var item = this.get('model');
      item.save();
      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(item);
      lot.save();
      // lot.toggleProperty('notCreatingItem');
      this.transitionToRoute('lot', lot.id);
    }
  }
});
