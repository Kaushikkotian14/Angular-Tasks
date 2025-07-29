import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
title = 'DataBindings';


  imageURL='assets/Tablet.png'

  public greeting=' ';

  click(){
    console.log('Hello ');
    this.greeting = 'Click event';
  }

  

   public username= ' ';
}
