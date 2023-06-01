import { Component, OnInit } from '@angular/core';
import { MockChatApiService } from '../mock-chat-api.service';
import { ChatConversation, ChatMessage } from '../model/model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatConversation!: ChatConversation;
  userInput!: string;

  constructor(private mockChatService: MockChatApiService){}

  ngOnInit(): void {
    this.mockChatService.getChatConversation().subscribe(
      (response: ChatConversation) => {
        this.chatConversation = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // sendMessage(): void {
  //   const userMessage: ChatMessage = {
  //     role: 'user',
  //     content: this.userInput
  //   };
  //   this.chatConversation.messages.push(userMessage);
  //   this.userInput = '';
  // }

  sendMessage(): void {
    const userMessage: ChatMessage = {
      role: 'user',
      content: this.userInput
    };
    this.chatConversation.messages.push(userMessage);

    this.mockChatService.getAssistantResponse(this.userInput).subscribe(
      (response: ChatMessage) => {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response.content
        };
        this.chatConversation.messages.push(assistantMessage);
      },
      (error) => {
        console.error(error);
      }
    );

    this.userInput = '';
  }
}
