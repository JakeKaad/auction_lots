Pennybags.NewItemRoute = Ember.Route.extend({
  model: function(params) {
    var item = this.store.createRecord('item');
    return item;
  }
});
