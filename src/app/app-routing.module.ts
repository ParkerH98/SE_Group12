import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputScreenComponent } from './input-screen/input-screen.component';
import { HomeComponent } from './management/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'input',
    component: InputScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
