import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
