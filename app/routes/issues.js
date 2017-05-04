import Ember from 'ember';

export default Ember.Route.extend({
    afterModel(resolvedModel) {
        console.log(resolvedModel);
    },

    model() {
        return {
            sections: ['Customer', 'Customer\'s Email', 'Description', 'Status', 'Opened At', 'Closed At', 'Employee'],
            issues: this.get('store').findAll('issue')
        };

    }
});
