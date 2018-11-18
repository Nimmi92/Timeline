import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostListService {
  private postList = [
		{
			"id": 1,
			"description" : "Hello,  I am a new bee to Valispace,  Please welcome me!",
			"createdBy" : "Nirmala"
		},
		{
			"id": 2,
			"description" : "Hello folks, there is a Angular developers conference happening next week! Join with me! ",
			"createdBy" : "Sasya"
		}
	]

  private defaultEmployee = 'Maria';

  private listSource = new BehaviorSubject(this.postList);
  currentList = this.listSource.asObservable();

  constructor() { }

  addPost(post) {
  	let self = this;
  	let postList = self.postList;
  	let newPostId = postList[postList.length-1].id + 1;
  	let newPost = {
  		"id": newPostId,
  		"description": post,
  		"createdBy": self.defaultEmployee
  	}
    postList.push(newPost)
    console.log(postList)
  }

  savePost(id,post) {
  	let self = this;
  	let postList = self.postList;
  	postList.map((list,i) => {
  		if(list.id === id) {
  			list.description = post;
  			list.createdBy = self.defaultEmployee;
  			postList[i] = list;
  			return postList;
  		}
  	})
  }

  deletePost(id) {
  	let self = this;
  	let postList = self.postList;
  	postList.map((list,i) => {
  		if(list.id === id) {
  			postList.splice(i,1);
  			return postList;
  		}
  	})
  }

}