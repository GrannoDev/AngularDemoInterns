import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imperative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imperative.component.html',
})
export class ImperativeComponent {
  constructor() {
    let count = 0;
    //   ...
    count++;
  }
}
