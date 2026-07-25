// Exercise 08 — LoadingService
// Used by LoadingInterceptor to show/hide global spinner
// BehaviorSubject: emits the current value to new subscribers immediately

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  // isLoading$ is an Observable the spinner template subscribes to via async pipe
  private _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._isLoading.asObservable();

  show(): void { this._isLoading.next(true);  }
  hide(): void { this._isLoading.next(false); }
}
