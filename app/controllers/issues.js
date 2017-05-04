import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        sortIssues(name) {
            alert(name);
        }
    }
});
