import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { HomeComponent } from './component/home/home.component';
import { DirectivesComponent } from './component/directives/directives.component'; 
import { ViewChildrenComponent } from './component/view-children/view-children.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'view-children', component: ViewChildrenComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
