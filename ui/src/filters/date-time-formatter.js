import DATE_TIME_FORMATS from '@/constants/date-time-formats.js';

const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function formatDateTime(dateTime) {
  const d = new Date(dateTime);
  if (d == 'Invalid Date') throw new Error('Invalid Date');

  if (lastWeek(d)) return `Last week, ${getDayName(d)} ${getDateWithSuffix(d.getDate())} at ${d.toTimeString().substr(0,5)}`;
  if (yesterday(d)) return `Yesterday at ${d.toTimeString().substr(0,5)}`;
  if (today(d)) return `Today at ${d.toTimeString().substr(0,5)}`;
  if (tomorrow(d)) return `Tomorrow at ${d.toTimeString().substr(0,5)}`;
  if (nextWeek(d)) return `Next week, ${getDayName(d)} ${getDateWithSuffix(d.getDate())} at ${d.toTimeString().substr(0,5)}`;

  return ((new Date()).getFullYear() === d.getFullYear() ?
    d.toLocaleString('en-GB', DATE_TIME_FORMATS.DATE_TIME_FORMAT_WITHOUT_YEAR) :
    d.toLocaleString('en-GB', DATE_TIME_FORMATS.DATE_TIME_FORMAT_WITH_YEAR));
}

export default formatDateTime;

function getDayName(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function lastWeek(date) {
  const now = new Date();
  return ((getWeekNumber(now) - 1) === getWeekNumber(date));
}

function yesterday(date) {
  const todaysDate = getTodaysDate();
  return ((todaysDate.getTime() - ONE_DAY_IN_MILLISECONDS) < date.getTime() &&
    date.getTime() < todaysDate.getTime());
}

function today(date) {
  const todaysDate = getTodaysDate();
  return (todaysDate.getTime() < date.getTime() && date.getTime() < (todaysDate.getTime() + ONE_DAY_IN_MILLISECONDS));
}

function tomorrow(date) {
  const todaysDate = getTodaysDate();
  return ((todaysDate.getTime() + ONE_DAY_IN_MILLISECONDS) < date.getTime() &&
    date.getTime() < (todaysDate.getTime() + 2 * ONE_DAY_IN_MILLISECONDS));
}

function getTodaysDate() {
  const startOfToday = new Date();
  startOfToday.setHours(0);
  startOfToday.setMinutes(0);
  startOfToday.setSeconds(0, 0);
  return startOfToday;
}

function nextWeek(date) {
  const now = new Date();
  return ((getWeekNumber(now) + 1) === getWeekNumber(date));
}

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  // Return array of year and week number
  return weekNo;
}

function getDateWithSuffix(dateOfMonth) {
  return dateOfMonth + getDateSuffix(dateOfMonth);
}

function getDateSuffix(dateOfMonth) {
  if (typeof (dateOfMonth) !== 'number' || (dateOfMonth < 1 && 31 > dateOfMonth)) throw new Error(`Invalid date of month provided: ${dateOfMonth}`);
  switch (dateOfMonth) {
    case 1:
    case 21:
    case 31:
      return `st`;
    case 2:
    case 22:
      return 'nd';
    case 3:
    case 23:
      return 'rd';
    default:
      return 'th';
  }
}