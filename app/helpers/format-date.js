import Ember from 'ember';

export function formatDate(date) {
  let newDate = moment(date, 'YYYY-MM-DD').format('MMM D, YYYY');
  return newDate;
}

export default Ember.Helper.helper(formatDate);
