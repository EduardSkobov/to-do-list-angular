import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MobxAngularModule } from 'mobx-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ControlsModule } from './modules/controls/controls.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskService } from './types/services/TaskService';
import { TaskServiceIDB } from './idb/taskServiceIDB';
import { CategoryService } from './types/services/CategoryService';
import { CategoryServiceIDB } from './idb/CategoryServiceIDB';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MobxAngularModule,
    FontAwesomeModule,
    ControlsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: TaskService, useExisting: TaskServiceIDB },
    { provide: CategoryService, useExisting: CategoryServiceIDB},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
