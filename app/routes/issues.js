import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let issues = this.get('store').findAll('issue');

        return {
            sections: ['Customer', 'Customer\'s Email', 'Description', 'Status', 'Opened At', 'Closed At', 'Employee'],
            issues: issues
        };

    }
});
