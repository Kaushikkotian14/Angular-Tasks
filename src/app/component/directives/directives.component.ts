import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
 searchText = '';

 books=[
  {name:'Angular',price:1000,available:true},
  {name:'React',price:2000,available:true},
  {name:'Vue',price:3000,available:false},
  {name:'SalesForce',price:4000,available:false}
 ]

 isClicked=false;
 onClick() {
   this.isClicked = !this.isClicked;
 }
 
 onPurchase(name:string){
    alert(name + ' is purchased');
 }

}
