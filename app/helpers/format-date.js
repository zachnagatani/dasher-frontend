import Ember from 'ember';

export function formatDate([date]) {
  return moment(date).format('MM/D/YY h:mm a');
}

export default Ember.Helper.helper(formatDate);
