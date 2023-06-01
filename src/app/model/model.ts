export interface ChatMessage {
    role: string;
    content: string;
  }
  
export interface ChatConversation {
    messages: ChatMessage[];
  }
  