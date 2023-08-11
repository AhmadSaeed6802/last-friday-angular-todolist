import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodComponent } from './MyComponents/add-tod/add-tod.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './MyComponents/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemComponent,
    AddTodComponent,
    AboutComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
