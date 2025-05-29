import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setUserData(data: any) {
    localStorage.setItem('currentUser', JSON.stringify(data));
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  removeUserData() {
    localStorage.removeItem('currentUser');
  }
}
