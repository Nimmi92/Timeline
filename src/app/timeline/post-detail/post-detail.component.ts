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
  }

  ngOnInit() {
 
  }

  editPost(id) {
  console.log(this)
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
}
