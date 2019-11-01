import { uuid } from 'vue-uuid';

export class TaskList {
  constructor(title) {
    this.id = uuid.v4();
    this.title = title;
    this.tasks = [];
  }
}