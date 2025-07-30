import { Component,ViewChild,ViewChildren,ElementRef,QueryList } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent {
fullname='';
@ViewChildren('input') inputs!: QueryList<ElementRef>;


submitName() {
  let name = '';

this.inputs.forEach((el) => {
  name += el.nativeElement.value+' ';
});
this.fullname= name.trim();
}
}