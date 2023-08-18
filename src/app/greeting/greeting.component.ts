import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { Greeting } from '../model/greeting';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './greeting.component.html',
})
export class GreetingComponent {
  private http = inject(HttpClient);
  private state = inject(StateService);
  private readonly greetingUrl = 'http://localhost:8080/dummyapi/greeting';
  greeting = this.state.observe('greeting');
  newGreeting = new FormControl('');

  public name = 'Hugo';
  // ! THiS SHOULD BE IN A SERVICE

  constructor() {
    this.http
      .get<Greeting>(this.greetingUrl)
      .pipe(take(1))
      .subscribe((greeting) => {
        this.state.set('greeting', greeting);
      });
  }

  doSomething(id: number) {
    console.log(id);
    return id * 5;
  }

  somevalue: string = 'John doe';

  save(): void {
    this.http
      .put<Greeting>(this.greetingUrl, {
        text: this.newGreeting.value,
      } as Greeting)
      .pipe(take(1))
      .subscribe((greeting) => {
        this.state.set('greeting', greeting);
      });
  }

  //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
