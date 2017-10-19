import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent {
  private interpolate = '{{ }} will bind the view to data from the component class'
  private someField = {
    id: 1,
    fname: 'Blake',
    lname: 'Kruppa'
  };
}
