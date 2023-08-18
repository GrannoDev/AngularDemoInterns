import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AnimationDirectiveDirective } from './animation-directive.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, AnimationDirectiveDirective],
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
  number = signal(0);
  numbers = signal([0, 1, 2, 3].reverse());
  toggleMenu = signal(false);
  increment(): void {
    this.number() < 3 ? this.number.update((n) => n + 1) : this.number.set(0);
  }
}
