import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, of, switchMap, take } from 'rxjs';
import { Post } from '../model/post';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly url = of('https://jsonplaceholder.typicode.com/posts');
  private state = inject(StateService);
  private http = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.url
      .pipe(
        switchMap((url) => this.http.get<Post[]>(url)),
        take(1)
      )
      .subscribe((posts) => {
        this.state.set('posts', posts);
      });

    this.state
      .observe('wantedPostId')
      .pipe(
        switchMap((id) =>
          this.state
            .observe('posts')
            .pipe(map((posts) => posts.find((post) => post.id === id)))
        )
      )
      .subscribe((post) => {
        this.state.set('selectedPost', post);
      });
  }

  setWantedPostId(id: number) {
    this.state.set('wantedPostId', id);
  }
}
