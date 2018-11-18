import { Component, Input, OnInit } from '@angular/core';
import { PostListService } from "../post-list/post-list.service";

@Component({
  selector: 'post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.css']
})
export class PostTimelineComponent implements OnInit {
	
  constructor(private postList: PostListService) { }

  ngOnInit() {
 
  }

  addPost(newPost) {
    this.postList.addPost(newPost)
  }
}
