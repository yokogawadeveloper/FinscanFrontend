import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  activeTab: 'signin' | 'signup' = 'signin';
  isEmailValid = false;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      username: ['464_0521', [Validators.required]],
      password: ['Yokogawa@12345', [Validators.required]]
    });
  }

  onSSOLogin(): void {
    if (this.loginForm.invalid) { this.loginForm.markAllAsTouched(); return; }
    const credentials = this.loginForm.value;
    this.http.post<any>(`${environment.apiUrl}/accounts/login/`, credentials)
      .pipe(
        tap(response => {
          if (response) {
            this.storageService.setUserData(response);
            this.router.navigate(['/dashboard']);
          }
        }),
        map(response => !!response),
        catchError(error => {
          this.loginError = 'Login failed. Please check your credentials.';
          return throwError(() => error);
        })
      )
      .subscribe();
  }
}
