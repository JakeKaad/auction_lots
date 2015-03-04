Blogger.LotController = Ember.ObjectController.extend({
  actions: {
    saveItem: function() {
      var newItem = this.store.createRecord('item', {
        name: this.get('name'),
        backstory: this.get('backstory'),
        owner: this.get('owner'),
        estimate: this.get('estimate'),
        reserve: this.get('reserver'),
        imageUrl: this.get('imageUrl')
      });
      newItem.save();
    }
  }
});
