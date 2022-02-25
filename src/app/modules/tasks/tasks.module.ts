import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { ControlsModule } from '../controls/controls.module';
import { TaskModalComponent } from './taskModal/task-modal/task-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { MobxAngularModule } from 'mobx-angular';


@NgModule({
  declarations: [
    TasksComponent, 
    TaskModalComponent,
    TaskListItemComponent
  ],
  imports: [
    CommonModule,
    ControlsModule,
    TasksRoutingModule,
    MobxAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TasksModule { }
