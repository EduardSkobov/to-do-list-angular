import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { ControlsModule } from '../controls/controls.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';


@NgModule({
  declarations: [CategoriesComponent, CategoryModalComponent],
  imports: [
    CommonModule,
    ControlsModule,
    MobxAngularModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
