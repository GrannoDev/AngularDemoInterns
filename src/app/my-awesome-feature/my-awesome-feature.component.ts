import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-awesome-feature',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './my-awesome-feature.component.html',
})
export class MyAwesomeFeatureComponent {
  fullname = new FormControl('');
  email = new FormControl('');

  save(): void {
    console.log(this.fullname.value);
    console.log(this.email.value);
  }
}
