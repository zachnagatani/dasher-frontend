import Ember from 'ember';

export function formatParameter([parameter]) {
  switch (parameter) {
    case 'customer_name':
      return 'Customer Name';
      break;
    case 'customer_email':
      return 'Email';
      break;
    case 'description':
      return 'Description';
      break;
    case 'status:desc':
      return 'Status';
      break;
    case 'opened_at':
      return 'Open Date';
      break;
    case 'closed_at:desc':
      return 'Close Date';
      break;
    case 'handling_employee':
      return 'Employee';
      break;
  }
}

export default Ember.Helper.helper(formatParameter);
