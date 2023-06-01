import { TestBed } from '@angular/core/testing';

import { MockChatApiService } from './mock-chat-api.service';

describe('MockChatApiService', () => {
  let service: MockChatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockChatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
