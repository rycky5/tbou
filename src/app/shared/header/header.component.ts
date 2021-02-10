import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalTesteComponent } from '../modal-teste/modal-teste.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false;
  private ghostCount: number = 0;
  private pacManBirthDate: Date;
  private pacManAge: number;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.pacManBirthDate = new Date('1980-05-22');
    this.calculateAge();
  }


  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  public countGhost(): void {
    this.ghostCount++;

    if (this.ghostCount === this.pacManAge) {
      this.openPacMan();
    }
  }

  public calculateAge(): void {
    if (this.pacManBirthDate) {
      var timeDiff = Math.abs(Date.now() - new Date(this.pacManBirthDate).getTime());
      this.pacManAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

  private openPacMan() {
    const modalRef = this.modalService.show(ModalTesteComponent);
    const onHidden = modalRef.onHidden.subscribe(data => {
      onHidden.unsubscribe();

      if (data) {
        this.ghostCount = 0;
      }
    });
  }

}
