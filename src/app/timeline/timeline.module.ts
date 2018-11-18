import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { TimelineComponent }    from './timeline.component';
import { PostTimelineComponent }    from './post-timeline/post-timeline.component';
import { PostListComponent }    from './post-list/post-list.component';
import { PostDetailComponent }    from './post-detail/post-detail.component';
import { PostListService }    from './post-list/post-list.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StorageServiceModule
  ],
  declarations: [
  	TimelineComponent,
    PostTimelineComponent,
    PostListComponent,
    PostDetailComponent
  ],
  providers: [PostListService],
  entryComponents: [TimelineComponent]
})
export class TimelineModule {}