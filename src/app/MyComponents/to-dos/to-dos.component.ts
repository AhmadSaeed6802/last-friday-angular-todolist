import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent {
  // todos!: string;
  todoshere!: Todo[];

  constructor() {
    var localItem = localStorage.getItem('todosherekey');
    // var localItem1=sessionStorage.getItem("todosherekey");

    if (localItem == null) {
      this.todoshere = [];
    } else {
      this.todoshere = JSON.parse(localItem);
    }
    // this.todoshere = [
    //   {
    //     sno: 1,
    //     title: 'This is title',
    //     desc: 'this is description',
    //     active: true,
    //   },
    //   {
    //     sno: 2,
    //     title: 'This is title2',
    //     desc: 'this is description',
    //     active: true,
    //   },
    //   {
    //     sno: 3,
    //     title: 'This is title3',
    //     desc: 'this is description',
    //     active: true,
    //   },
    // ];
  }
  deleteTodo(todo: Todo) {
    const index = this.todoshere.indexOf(todo);
    this.todoshere.splice(index, 1);
    console.log(todo);
    localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
    //sessionStorage.setItem("todosherekey",JSON.stringify(this.todoshere));
  }
  addTodo(todo: Todo) {
    if (todo.title == null || todo.title == '') {
      alert('Please enter the title');
    } else if (todo.desc == null || todo.desc == '') {
      alert('Please enter the description');
    } else {
     
    this.todoshere.push(todo);
    // this.todoshere.reverse();
    // this.todoshere.unshift(todo);


      localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
      //sessionStorage.setItem("todosherekey",JSON.stringify(this.todoshere));
    }
  }
  toggleTodo(todo: Todo) {
    const index = this.todoshere.indexOf(todo);
    this.todoshere[index].active=!this.todoshere[index].active;
    localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
    //sessionStorage.setItem("todosherekey",JSON.stringify(this.todoshere));
  }
  // todos = JSON.parse(String(this.todoshere));
}
