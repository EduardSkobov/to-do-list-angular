import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { PageContentComponent } from './page-content/page-content.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TextareaComponent } from './textarea/textarea.component';
import { RouterModule } from '@angular/router';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { MobxAngularModule } from 'mobx-angular';


@NgModule({
  declarations: [
    InputComponent, 
    SelectComponent, 
    HeaderComponent, 
    ListComponent, 
    ModalComponent, 
    PageContentComponent, ListItemComponent, TextareaComponent, ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    MobxAngularModule,
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    PageContentComponent,
    ListItemComponent,
    ListComponent,
    ModalComponent,
    InputComponent,
    MobxAngularModule,
    TextareaComponent,
    SelectComponent,
    ConfirmModalComponent
  ]
})
export class ControlsModule { }
