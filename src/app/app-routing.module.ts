import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'campeonatos',
    component: CampeonatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
