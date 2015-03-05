Pennybags.ItemController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if(confirm('Are you sure?')) {
        var item = this.get('model');
        var lot = item.get('lot');
        lot.get('items').removeObject(item);
        debugger;
        lot.save();
        item.destroyRecord();
        this.transitionToRoute('lot', lot.id);
      }
    }
  }
});
