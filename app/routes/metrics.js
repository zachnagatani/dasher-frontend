import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var results = this.get('store').findAll('month');

        var months = results.then(function(data) {
            var monthsArray = [];

            data.content.forEach(month => {
                monthsArray.push(month.__data);
            });

            return Ember.RSVP.all(monthsArray);
        });

        return Ember.RSVP.hash({
            data: months
        });
    }
});
