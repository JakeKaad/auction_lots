Pennybags.NewItemController = Ember.ObjectController.extend({
  actions: {
    saveItem: function() {
      var item = this.get('model');
      item.save();

      var controller = this;
      item.get('lot').then(function(lot) {
        lot.save();
        controller.transitionToRoute('lot', lot);
      });
      // var newItem = this.store.createRecord('item', {
      //   name: this.get('name'),
      //   backstory: this.get('backstory'),
      //   owner: this.get('owner'),
      //   estimate: this.get('estimate'),
      //   reserve: this.get('reserve'),
      //   imageUrl: this.get('imageUrl')
      // });
      // newItem.save();
    }
  }
});
