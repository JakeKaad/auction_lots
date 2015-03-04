Pennybags.Lot = DS.Model.extend({
  title: DS.attr(),
  dateOfAuction: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
