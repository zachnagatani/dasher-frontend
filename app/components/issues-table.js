import Ember from 'ember';

export default Ember.Component.extend({
    sortedIssues: Ember.computed.sort('issues', 'sortDefinition'),

    // Initially sort by open/closed status and then oldest first
    sortDefinition: ['status:desc', 'opened_at'],

    /**
     * Sets the sortDefinition based on property name
     * @param {String} property - property of issue to sort by
     */
    setSortDef(property) {
        // Add/remove property from sortDefinition depending on inclusion
        !this.get('sortDefinition').includes(property) ?
            this.get('sortDefinition').addObject(property) :
            this.get('sortDefinition').removeObject(property);
    },

    actions: {
        /**
         * Passes property name to setSortDef to edit the sortDefinition
         * @param {String} name - name of table column
         */
        sortIssues(name) {
            // Bind `this` for setSortDef to the our Component class
            const setSortDef = this.get('setSortDef').bind(this);

            switch (name) {
                case 'Customer':
                    setSortDef('customer_name');
                    break;
                case 'Customer\'s Email':
                    setSortDef('customer_email');
                    break;
                case 'Description':
                    setSortDef('description');
                    break;
                case 'Status':
                    setSortDef('status:desc');
                    break;
                case 'Opened At':
                    setSortDef('opened_at');
                    break;
                case 'Closed At':
                    setSortDef('closed_at:desc');
                    break;
                case 'Employee':
                    setSortDef('handling_employee');
                    break;
            }
        }
    }
});
