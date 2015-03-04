Pennybags.NewItemRoute = Ember.Route.extend({
  model: function(params) {
    var lot = this.modelFor('lot');
    var item = this.store.createRecord('item');
    lot.get('items').then(function(items) {
      items.pushObject(item);
    });
    return item;
  }
});
