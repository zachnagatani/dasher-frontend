import DS from 'ember-data';

export default DS.Model.extend({
    label: DS.attr('string'),
    time: DS.attr('string'),
    value: DS.attr('number')
});
