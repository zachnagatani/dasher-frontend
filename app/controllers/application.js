import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logout() {
            Ember.$('#logout-form').submit();
        }
    }
});
