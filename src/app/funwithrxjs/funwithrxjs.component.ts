import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  BehaviorSubject,
  concatMap,
  debounceTime,
  delay,
  from,
  map,
  of,
  repeat,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-funwithrxjs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './funwithrxjs.component.html',
})
export class FunwithrxjsComponent {
  public http = inject(HttpClient);
  search = new FormControl('');
  numbers = [3, 2, 1, 'Go!'];

  concatNumbers = from(this.numbers).pipe(
    concatMap((n) => of(n).pipe(delay(1000))),
    repeat(Infinity)
  );

  // Creating an observable
  name = of('Hugo');

  // ? From vs Of

  // ? DEBOUNCETIME & STARTWITH
  searchResults = this.search.valueChanges.pipe(
    debounceTime(1000),
    startWith('')
  );

  nameSubject: BehaviorSubject<string> = new BehaviorSubject('Hugo');

  constructor() {
    // ! BIG NO NO
    this.name.subscribe((name) => {
      console.log(name);
    });

    // * GOOD
    this.name.pipe(takeUntilDestroyed()).subscribe((name) => {
      console.log(name);
    });

    //   ? MAP
    this.name
      .pipe(
        takeUntilDestroyed(),
        map((name) => name.toUpperCase())
      )
      .subscribe((name) => {
        console.log(name); // HUGO
      });

    //   ? TAP
    this.name
      .pipe(
        takeUntilDestroyed(),
        tap((name) => console.log(name)), // Hugo
        map((name) => name.toUpperCase()),
        tap((name) => console.log(name)) // HUGO
      )
      .subscribe();

    // ? SWITCHMAP
    of('someRandomURL').pipe(switchMap((url) => this.http.get(url)));

    // ? TAKE
    from([1, 2, 3])
      .pipe(take(2))
      .subscribe((n) => console.log(n)); // 1, 2
  }
  ngOnInit(): void {}
}
