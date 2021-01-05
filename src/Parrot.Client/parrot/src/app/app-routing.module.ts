import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PictionaryComponent } from './pictionary/pictionary/pictionary.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }, 
  {
    path: 'admin', 
    component: PictionaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }