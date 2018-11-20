import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class PostListService {

  constructor(@Inject(LOCAL_STORAGE) private Storage: StorageService) {

    private postList = [
    {
      "id": 1,
      "descriptionText" : "Hello,  I am a new bee to Valispace,  Please welcome me!",
      "description": "Hello,  I am a new bee to Valispace,  Please welcome me!",
      "createdBy" : "Nirmala",
      "createdOn": 1542574999630
    },
    {
      "id": 2,
      "descriptionText" : "Hello folks, there is a Angular developers conference happening next week! Join with me! ",
      "description" : "Hello folks, there is a Angular developers conference happening next week! Join with me! ",
      "createdBy" : "Maria",
      "createdOn": 1542575020321
    }
  ];

  private defaultEmployee = 'Maria';

  Storage.set('postList', this.postList);
  private postListFromLocalStorage = Storage.get('postList');
  private listSource = new BehaviorSubject(this.postList);
  currentList = this.listSource.asObservable();
  
  extractContent(s) {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };

  postIdGenerator() {
    return "ss-s-s-s-sss".replace(/s/g, this.randomGenerator);
  };

  randomGenerator() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addPost(post,isHTML) {
  	let self = this;
  	let postList = self.postList;
  	let newPostId = this.postIdGenerator();
  	let newPost = {
  		"id": newPostId,
  		"createdBy": self.defaultEmployee,
      "description": isHTML ? post : post.value,
      "descriptionText": isHTML ? self.extractContent(post.value) :  post.value,
      "createdOn": Date.now()
  	}
    postList.unshift(newPost);
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

  getSuggestion(word) {
    let getEmployeesList = this.Storage.get('employeeList');
    let employeeNames = [];
    getEmployeesList.map((emp,i) => {
      employeeNames.push(emp.name)
    });
    if(word === '') {
      return employeeNames;
    }
    else {
      let suggestedNames = [];
      employeeNames.map((name,i) => {
        if(name.indexOf(word) > -1){
          suggestedNames.push(name);
        }
      });
      return suggestedNames;
    }
  } 

  showPosterDetails(poster) {
    let getEmployeesList = this.Storage.get('employeeList');
    let posterDetail = {};
    getEmployeesList.map((emp,i) => {
      if(emp.name === poster) {
        posterDetail = emp;
      }
    })
    return posterDetail;
  }


}
}