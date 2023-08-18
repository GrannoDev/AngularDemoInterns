import { Greeting } from './greeting';
import { Post } from './post';

export interface State {
  posts: Post[];
  selectedPost: Post | undefined;
  wantedPostId: number | undefined;
  greeting: Greeting | undefined;
}
