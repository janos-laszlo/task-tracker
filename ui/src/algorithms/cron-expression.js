import * as Constants from '@/constants/constants';
import cb from 'cron-builder';

function getCronExpression(frequency, value) {
  if (!frequency) throw new Error('frequency required');
  let cronExp = new cb();
  let exp;
  switch (frequency) {
    case Constants.ONCE:
      if (!(value instanceof Date)) return '';
      exp = {
        minute: [value.getMinutes()],
        hour: [value.getHours()],
        dayOfTheMonth: [value.getDate()],
        month: [value.getMonth() + 1],
        dayOfTheWeek: ['*']
      };
      cronExp.setAll(exp);
      return `${cronExp.build()} ${value.getFullYear()}`;

    case Constants.HOURLY:
      if (typeof (value) !== 'number') return '';
      cronExp.set('minute', [value.toString()]);
      return cronExp.build();
    case Constants.DAILY:
      if (typeof (value.minute) !== 'number' ||
        typeof (value.hour) !== 'number') return '';
      cronExp.set('minute', [value.minute.toString()]);
      cronExp.set('hour', [value.hour.toString()]);
      return cronExp.build();
    case Constants.WEEKLY:
      if (typeof (value.minute) !== 'number' ||
        typeof (value.hour) !== 'number' ||
        typeof (value.dayOfWeek) !== 'number') return '';
      cronExp.set('minute', [value.minute.toString()]);
      cronExp.set('hour', [value.hour.toString()]);
      cronExp.set('dayOfTheWeek', [value.dayOfWeek.toString()]);
      return cronExp.build();
    case Constants.MONTHLY:
      return '';
    case Constants.YEARLY:
      return '';
    case Constants.CRON:
      return '';
    default:
      throw new Error(`Unhandled frequency: ${frequency}`);
  }
}

export default getCronExpression;