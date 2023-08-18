import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  private state = inject(StateService);
  private postService = inject(PostsService);
  @Input() id!: string;
  post = this.state.observe('selectedPost').pipe(delay(1000));
  ngOnInit() {
    this.postService.setWantedPostId(Number(this.id));
  }
}
