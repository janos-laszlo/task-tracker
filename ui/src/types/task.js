import { uuid } from 'vue-uuid';

export class Task {
  constructor(title, remindAt, reminderFrequency){
    this.id = uuid.v4();
    this.title = title;
    this.remindAt = remindAt;
    this.reminderFrequency = reminderFrequency;
    this.completed = false;
    this.createdAt = new Date();
  }
}