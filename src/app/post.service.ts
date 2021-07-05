import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';

// Injectable decorator
@Injectable({ providedIn: 'root' })
export class PostService {

  listChangedEvent: EventEmitter<Post[]> = new EventEmitter;

   listOfPosts: Post[] = [
  //   new Post(
  //     'Nature 1',
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi excepturi consectetur impedit amet repellat repudiandae explicabo molestiae qui sit ducimus, iure harum quas nemo libero voluptatibus tempore, recusandae asperiores quam? Officia impedit, dicta quo quam aspernatur modi. Adipisci ipsa, commodi nemo iusto dolor eligendi quisquam voluptate deleniti velit quaerat aspernatur!',
  //     'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
  //     'arunavsen@gmail.com',
  //     new Date(),
  //     5
  //   ),
  //   new Post(
  //     'Nature 2',
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi excepturi consectetur impedit amet repellat repudiandae explicabo molestiae qui sit ducimus, iure harum quas nemo libero voluptatibus tempore, recusandae asperiores quam? Officia impedit, dicta quo quam aspernatur modi. Adipisci ipsa, commodi nemo iusto dolor eligendi quisquam voluptate deleniti velit quaerat aspernatur!',
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
  //     'arunavsen@gmail.com',
  //     new Date(),
  //     2
  //   ),
  //   new Post(
  //     'Nature 3',
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi excepturi consectetur impedit amet repellat repudiandae explicabo molestiae qui sit ducimus, iure harum quas nemo libero voluptatibus tempore, recusandae asperiores quam? Officia impedit, dicta quo quam aspernatur modi. Adipisci ipsa, commodi nemo iusto dolor eligendi quisquam voluptate deleniti velit quaerat aspernatur!',
  //     'https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg?h=1483c54f&amp;itok=GdjA9GRu',
  //     'arunavsen@gmail.com',
  //     new Date(),
  //     10
  //   ),
  ];

  // facility 1
  getPosts() {
    return this.listOfPosts;
  }

  // facility 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  // facility 3
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  // facility 4
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  // facility 5
  getPost(index: number){
    return this.listOfPosts[index];
  }

  // facility 6
  likePost(index: number){
    this.listOfPosts[index].numberOfLikes += 1;
  }

  // facility 7
  setPosts(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
