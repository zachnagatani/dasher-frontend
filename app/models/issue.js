import DS from 'ember-data';

export default DS.Model.extend({
    customer_name: DS.attr('string'),
    customer_email: DS.attr('string'),
    description: DS.attr('string'),
    status: DS.attr('boolean'),
    opened_at: DS.attr('date'),
    closed_at: DS.attr('date'),
    handling_employee: DS.attr('string')
});
