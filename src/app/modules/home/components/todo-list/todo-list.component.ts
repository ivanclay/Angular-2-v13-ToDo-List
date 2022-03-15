import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    //  {task: "Task 1", checked: true},
    //  {task: "Task 2", checked: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteTaskListItem(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteTaskListAllItems(): void {
    const confirm = window.confirm("Voce deseja excluir toda a lista?");
    if(confirm){
      this.taskList.splice(0,this.taskList.length);
    }
  }

  public setEmitTaskList(event: string): void {
    if(event.trim()){
      this.taskList.push({task: event, checked: false});
    }
  }

}
