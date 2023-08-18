import { Injectable } from '@angular/core';
import { ObservableStore } from '@northtech/ratatosk';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root',
})
export class StateService extends ObservableStore<State> {
  constructor() {
    super({
      posts: [],
      selectedPost: undefined,
      wantedPostId: undefined,
      greeting: undefined,
      //   ...
    });
  }
}
