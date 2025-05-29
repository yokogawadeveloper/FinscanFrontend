import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private storageService: StorageService) { }

  login(userData: any): void {
    this.storageService.setUserData(userData);
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    // this.storageService.clearUserData();
    this.isLoggedInSubject.next(false);
  }

  private hasToken(): boolean {
    return !!this.storageService.getUserData();
  }
}
