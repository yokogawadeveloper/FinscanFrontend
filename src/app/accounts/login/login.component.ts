import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  activeTab: 'signin' | 'signup' = 'signin';
  isEmailValid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  switchTab(tab: 'signin' | 'signup'): void {
    this.activeTab = tab;
  }

  onContinue(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      // Handle form submission
    }
  }

  onGoogleLogin(): void {
    console.log('Google login clicked');
    // Handle Google OAuth
  }

  onAppleLogin(): void {
    console.log('Apple login clicked');
    // Handle Apple OAuth
  }

  onFacebookLogin(): void {
    console.log('Apple login clicked');
    // Handle Apple OAuth
  }
  
  loginWithSSO(): void{
    
  }

}
