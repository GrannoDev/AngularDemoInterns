import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { combineLatest, debounceTime, map, startWith } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  private state = inject(StateService);
  search = new FormControl('');

  posts = combineLatest([
    this.search.valueChanges.pipe(debounceTime(300), startWith('')),
    this.state.observe('posts'),
  ]).pipe(
    map(([search, posts]) =>
      search !== ''
        ? posts.filter((post) => post.userId === Number(search))
        : posts
    )
  );
  constructor(private postService: PostsService) {}
}
