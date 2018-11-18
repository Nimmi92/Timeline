import { Component, Input, OnInit } from '@angular/core';
import { PostListService } from "../post-list/post-list.service";

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
	@Input() post;
  isEditing: boolean;

  constructor(private postList: PostListService) {
  	let isEditing = false;
    let poster = {};
    let posterVisible = false;
  }

  ngOnInit() {
 
  }

  editPost(id) {
    this.isEditing = true;
  }

  cancelPost(id) {
  	this.isEditing = false;
  }

  savePost(id,post) {
  	this.isEditing = false;
    this.postList.savePost(id,post);
  }

  deletePost(id) {
    this.postList.deletePost(id);
  }

  showPosterDetails(poster) {
    this.posterVisible = true;
    this.poster = this.postList.showPosterDetails(poster);
  }

  hidePosterDetails() {
    this.posterVisible = false;
    this.poster = {}
  }

}
