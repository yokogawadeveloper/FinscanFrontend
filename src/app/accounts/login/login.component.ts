import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth.service'; // import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isEmailValid = false;
  loginError: string | null = null;
  
  fullText: string = 'Hi, Welcome Back';
  displayText: string = '';
  speed: number = 100;
  private index: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      username: ['464_0521', [Validators.required]],
      password: ['Yokogawa@12345', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.typeWriter();
  }

  onSSOLogin(): void {
    if (this.loginForm.invalid) { this.loginForm.markAllAsTouched(); return; }
    const credentials = this.loginForm.value;
    this.http.post<any>(`${environment.apiUrl}/accounts/login/`, credentials)
      .pipe(
        tap(response => {
          if (response) {
            this.storageService.setUserData(response);
            this.authService.login(response);
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

  typeWriter(): void {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }
}
