import { uuid } from 'vue-uuid';
import { FREQUENCIES } from '@/constants/constants.js';
import { isValidDate } from '@/utils/utils.js';

export class Task {
  constructor(title, remindAt, reminderFrequency) {
    if (!title) throw new Error('Invalid title');
    if (remindAt && !isValidDate(new Date(remindAt))) throw new Error('Invalid reminder date');
    if (reminderFrequency && FREQUENCIES.indexOf(reminderFrequency) === -1) throw new Error('Invalid reminder frequency');
    this.id = uuid.v4();
    this.title = title;
    this.remindAt = remindAt;
    this.reminderFrequency = reminderFrequency;
    this.completed = false;
    this.createdAt = new Date();
  }
}
