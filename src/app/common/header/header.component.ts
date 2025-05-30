import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuVisible = false;
  current_user: string = '';
  alias_user: string = '';

  constructor(
    private sideService: SidebarService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getCurrentUserName()
  }

  toggleSidebar() {
    this.sideService.toggleSidebar();
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }

  logout(): void {
    this.authService.logout()
  }

  getCurrentUserName(): void {
    this.current_user = JSON.parse(localStorage.getItem('currentUser')!)?.fullname;
    const fullName = JSON.parse(localStorage.getItem('currentUser')!)?.fullname;
    if (fullName) {
      const letters = fullName.split(' ').map((word: string | any[]) => word.slice(0, 1)).join('');
      this.alias_user = letters;
    } else {
      this.alias_user = '';
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup-menu') && !target.closest('.user-avatar')) {
      this.closeMenu();
    }
  }

}
