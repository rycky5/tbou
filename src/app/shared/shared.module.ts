import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalTesteComponent } from './modal-teste/modal-teste.component';
import { CardCampeonatoComponent } from './card-campeonato/card-campeonato.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ModalTesteComponent, CardCampeonatoComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports: [
    ModalModule,
    CardCampeonatoComponent,
    HeaderComponent,
  ],
  entryComponents: [
    ModalTesteComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
