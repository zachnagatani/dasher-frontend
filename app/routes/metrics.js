import Ember from 'ember';

export default Ember.Route.extend({
    months: Ember.inject.service(),

    model() {
        // Fetch the month data from the months service
        return this.get('months').getMonthsData().then(function(data) {
            // Must convert Ember Object to normal object to allow toString to be called on it
            return JSON.parse(JSON.stringify(data));
        });
    }
});
