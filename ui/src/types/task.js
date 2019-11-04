import { uuid } from 'vue-uuid';

export class Task {
  constructor(title, cronExpression){
    this.id = uuid.v4();
    this.title = title;
    this.cronExpression = cronExpression;
    this.completed = false;
    this.createdAt = new Date();
  }
}