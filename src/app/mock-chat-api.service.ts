import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatConversation, ChatMessage } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class MockChatApiService {

  constructor() { }
  getChatConversation(): Observable<ChatConversation> {
    // Simulate API response
    const mockResponse: ChatConversation = {
      messages: [
        // { role: 'user', content: 'Hello' },
        // { role: 'assistant', content: 'Hi, how can I help you?' },
        // { role: 'user', content: 'I have a question about XYZ' },
        // { role: 'assistant', content: 'Sure, what would you like to know?' }
      ]
    };
    return of(mockResponse); // Wrap the mock response in an Observable using the `of` operator
  }

  getAssistantResponse(userMessage: string): Observable<ChatMessage> {
    // Simulate API response based on user's message
    let assistantResponse: string;

    // Example logic to generate assistant response based on user input
    if (userMessage.toLowerCase().includes('hello')) {
      assistantResponse = 'Hi there!';
    } else if (userMessage.toLowerCase().includes('help')) {
      assistantResponse = 'Sure, how can I assist you?';
    } else {
      assistantResponse = 'sorry, unable to understand. Can you please rephrase?';
    }

    const mockResponse: ChatMessage = {
      role: 'assistant',
      content: assistantResponse
    };

    return of(mockResponse);
  }
}
