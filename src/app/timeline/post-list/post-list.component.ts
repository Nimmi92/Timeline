import { Component, OnInit } from '@angular/core';
import { PostListService } from "./post-list.service";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private postList: PostListService) { 
  	
  }

  ngOnInit() {
    this.postList.currentList.subscribe(postList => this.postList = postList)
  }
}
