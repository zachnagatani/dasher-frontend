import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            options: ['Issues', 'Sign Ups'],
            data: [
                {
                    label: '12/16',
                    value: 2
                }, {
                    label: '01/17',
                    value: 2
                }, {
                    label: '02/17',
                    value: 5
                }, {
                    label: '03/17',
                    value: 7
                }, {
                    label: '04/17',
                    value: 1
                }, {
                    label: '05/17',
                    value: 0
                }
            ]
        };
    }
});
