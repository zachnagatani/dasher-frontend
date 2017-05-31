import Ember from 'ember';

export function formatParameter([parameter]) {
  switch (parameter) {
    case 'customer_name':
      return 'Customer Name';
    case 'customer_email':
      return 'Email';
    case 'description':
      return 'Description';
    case 'status:desc':
      return 'Status';
    case 'opened_at':
      return 'Open Date';
    case 'closed_at:desc':
      return 'Close Date';
    case 'handling_employee':
      return 'Employee';
  }
}

export default Ember.Helper.helper(formatParameter);
