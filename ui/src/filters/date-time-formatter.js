import DATE_TIME_FORMATS from '@/constants/date-time-formats.js';

function formatDateTime(dateTime) {
  const d = new Date(dateTime);
  if (d == 'Invalid Date') throw new Error('Invalid Date');
  return ((new Date()).getFullYear() === d.getFullYear() ?
    d.toLocaleString('en-GB', DATE_TIME_FORMATS.DATE_TIME_FORMAT_WITHOUT_YEAR) :
    d.toLocaleString('en-GB', DATE_TIME_FORMATS.DATE_TIME_FORMAT_WITH_YEAR));
}

export default formatDateTime;