import {Component, OnInit} from '@angular/core';
import {MessagesService, ThreadsService} from '../services/services';
import {Message, Thread} from '../models/models';
import * as _ from 'underscore';

@Component({
  selector: 'nav-bar',
  templateUrl: 'chatNavBar.html'
})
export class ChatNavBar implements OnInit {

  unreadMessagesCount: number;
  readMessagesCount: number;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.messagesService.messages
      .combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread: Thread) =>
          [currentThread, messages] )

      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        let mensajesLeidos: number = 0;
        let mensajesNoLeidos: number = 0;

        _.reduce(messages,
            (sum: number, m: Message) => {
              let messageIsInCurrentThread: boolean = m.thread &&
                currentThread && (currentThread.id === m.thread.id);
              if (m && !m.isRead && !messageIsInCurrentThread) {
                mensajesNoLeidos += 1;
              } else if (m) {
                mensajesLeidos += 1;
              }
            }, 0);

        this.unreadMessagesCount = mensajesNoLeidos;
        this.readMessagesCount = mensajesLeidos;
      });
  }
}

