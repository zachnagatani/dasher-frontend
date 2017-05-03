import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Customer', 'Customer\'s Email', 'Description', 'Status', 'Opened At', 'Closed At', 'Employee'];
    }
});
