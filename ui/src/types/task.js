import { uuid } from 'vue-uuid';

export class Task {
  constructor(title, reminder){
    this.id = uuid.v4();
    this.title = title;
    this.reminder = reminder;
    this.completed = false;
    this.createdAt = new Date();
  }
}