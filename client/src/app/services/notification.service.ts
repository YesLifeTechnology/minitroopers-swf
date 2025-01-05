import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notify$: Subject<FrontNotification> = new Subject();

  notify(
    type: 'success' | 'error' | 'info',
    title: string,
    message: string = '',
    ttl = 3000
  ) {
    this.notify$.next({
      type: type,
      title: title,
      message: message,
      ttl: ttl,
    });
  }
}

export interface FrontNotification {
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
  ttl: number;
}
