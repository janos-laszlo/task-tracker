import * as Constants from '@/constants/constants';
import cb from 'cron-builder';

function getCronExpression(frequency, value) {
  if (!frequency) throw new Error('frequency required');
  if (!value) return '';
  let cronExp = new cb();
  let exp;
  switch (frequency) {
    case Constants.ONCE:
      if (!(value instanceof Date)) throw new Error(`Date expected when frequency is ${Constants.ONCE}`);
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
      if (!value || !value.length) return '';
      cronExp.set('minute', [value]);
      return cronExp.build();
    case Constants.DAILY:
      cronExp.set('minute', [value.minute]);
      cronExp.set('hour', [value.hour]);
      return cronExp.build();
    case Constants.WEEKLY:
      return '';
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