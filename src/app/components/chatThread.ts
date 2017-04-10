import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/services';
import { Thread } from '../models/models';

@Component({
  inputs: ['thread'],
  selector: 'chat-thread',
  templateUrl: 'chatThread.html' 
})
export class ChatThread implements OnInit {

  thread: Thread;
  selected: boolean = false;

  constructor(public threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    document.getElementById("chat-action").scrollIntoView(false);
    event.preventDefault();
  }
}
