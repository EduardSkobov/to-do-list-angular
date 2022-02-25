import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() public minWidth: string;
  @Input() public minHeigth: string;
  @Input() public modalTitle: string;
  @Input() public close: () => void;
}
