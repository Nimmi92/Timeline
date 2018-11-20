import { Component, OnInit } from '@angular/core';
import { PostListService } from "./post-list.service";
import { ArraySortPipe } from "../timeline.filters";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  pipes: [ArraySortPipe]
})
export class PostListComponent implements OnInit {
  constructor(private postListService: PostListService) { 
  	
  }

  ngOnInit() {
    this.postListService.currentList.subscribe((postList) => {
    	this.postList = postList.sort((a, b) => {
      		return b.createdOn - a.createdOn;
      	})
    });
  }

}
