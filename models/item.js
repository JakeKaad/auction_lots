Pennybags.Item = DS.Model.extend({
  name: DS.attr(),
  backstory: DS.attr(),
  reserve: DS.attr(),
  estimate: DS.attr(),
  owner: DS.attr(),
  imageUrl: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
