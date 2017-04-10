import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThreadsService } from '../services/services';
import  {Observable } from 'rxjs';
import { Thread } from '../models/models';

@Component({
  selector: 'chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="conversation-wrap jumbotron">
        <chat-thread *ngFor="let thread of threads | async" [thread]="thread">
        </chat-thread>
      </div>
    </div>
  `
})
export class ChatThreads {
  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }
}