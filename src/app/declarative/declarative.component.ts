import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-declarative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './declarative.component.html',
})
export class DeclarativeComponent implements OnInit {
  constructor() {
    const count = 0;
  }
  ngOnInit(): void {
    const name = 'declarative';

    const namesignal = signal('declarative');

    const nameObservable = of('declarative');

    const nameTurnary = name === 'declarative' ? 'declarative' : 'imperative';
  }
}
