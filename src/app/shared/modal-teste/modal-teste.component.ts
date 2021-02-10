import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-teste',
  templateUrl: './modal-teste.component.html',
  styleUrls: ['./modal-teste.component.scss']
})
export class ModalTesteComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  closeModal() {
    this.bsModalRef.hide();
  }

}
