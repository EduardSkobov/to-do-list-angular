import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent{

  @Input() public title: string;
  @Input() public content: string

  @Input() public close: () => void;
  @Input() public ok: () => void;
}
