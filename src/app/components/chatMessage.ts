import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/services';
import { User, Message} from '../models/models';

@Component({
  inputs: ['message'],
  selector: 'chat-message',
  templateUrl: 'chatMessage.html'
})
export class ChatMessage implements OnInit {

  message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
          if (this.message.author && user) {
            this.incoming = this.message.author.id !== user.id;
          }
        });
  }
}