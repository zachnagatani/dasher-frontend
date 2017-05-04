import Ember from 'ember';

export default Ember.Route.extend({
    afterModel(resolvedModel) {
        console.log('resolvedModel:', resolvedModel);
    },

    model() {
        // Fetch month data from store
        return this.get('store').findAll('month').then(data => {
            var monthsArr = [];

            data.content.forEach(month => {
                monthsArr.push(month.__data);
            });

            // Must convert into normal JS object to avoid TypeError: cannot convert object into primitive value
            return JSON.parse(JSON.stringify(monthsArr));
        });
    }
});