import * as Constants from '@/constants/constants';
import cb from 'cron-builder';

function getCronExpression(frequency, value) {
  if (!frequency) throw new Error('frequency required');
  let cronExp = new cb();
  //let exp;
  switch (frequency) {
    case Constants.HOURLY:
      if (!value || !value.length) value = ["*"];
      cronExp.set('minute', [value]);
      return cronExp.build();
    case Constants.DAILY:
      cronExp.set('minute', [value.minute]);
      cronExp.set('hour', [value.hour]);
      return cronExp.build();
    default:
      throw new Error(`Unhandled frequency: ${frequency}`);
  }
}

export default getCronExpression;