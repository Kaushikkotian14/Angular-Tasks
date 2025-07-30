import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent  {
 @Output() nameSubmit = new EventEmitter<string>();
  

title = 'DataBindings';

 
  imageURL='assets/Tablet.png'

  public greeting=' ';

  click(){
    console.log('Hello ');
    this.greeting = 'Click event';
  }

  name(name:string){
  this.nameSubmit.emit(name);
  alert(`Name submitted child: ${name}`);
  }
  
   public username= ' ';
}
