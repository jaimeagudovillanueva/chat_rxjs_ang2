import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {  FormsModule } from '@angular/forms';

import { ChatNavBar} from './components/chatNavBar';
import { ChatThreads } from './components/chatThreads';
import { ChatThread } from './components/chatThread';
import { ChatWindow } from './components/chatWindow';
import { ChatMessage } from './components/chatMessage';

import {servicesInjectables} from './services/services';
import {utilInjectables} from './util/util';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBar,
    ChatThreads,
    ChatThread,
    ChatWindow,
    ChatMessage,
    utilInjectables
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ servicesInjectables ],
  bootstrap: [AppComponent]
})
export class AppModule { }
