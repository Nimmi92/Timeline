import { Component, Input, OnInit } from '@angular/core';
import { PostListService } from "../post-list/post-list.service";

@Component({
  selector: 'post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.css']
})
export class PostTimelineComponent implements OnInit {
	

  constructor(private postList: PostListService) { 
      let suggestedNames = [];
      let suggestionActive = false;
      let postHTML = '';
  }

  ngOnInit() {
 
  }

  addPost(newPost) {
    if(this.postHTML) {
      this.postList.addPost(this.postHTML,true);
    }
    else {
      this.postList.addPost(newPost);
    }
  }

  startSuggestion(post) {
    let post = post.toLowerCase();
      if(post.indexOf('@') > -1) {
        let searchRegex = /@[a-z]*/g;
        let getWordToSearch = post.match(searchRegex)[0].split('@')[1]
        this.suggestedNames = this.postList.getSuggestion(getWordToSearch);
        console.log(event)
      }
      else {
        this.suggestedNames = [];
      }
  }

  insertSuggestion(name, post) {
    this.postHTML = post.value.replace(/@[a-z]*/g, '<span class="autocomplete-name">' + name + '</span>')
    post.value = post.value.replace(/@[a-z]*/g, name);

    this.suggestedNames = [];
  }

}
