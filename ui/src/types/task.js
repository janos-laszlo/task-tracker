import { uuid } from 'vue-uuid';

export class Task {
  constructor(title, reminder){
    this.id = uuid.v4();
    this.title = title;
    this.completed = false;
    this.reminder = reminder;
  }
}