import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit {
  constructor(public modal: ModalComponent) {}

  ngOnInit(): void {
    this.modal.register('auth');
    this.modal.register('test');
  }
}
