import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuVisible = false;

  constructor(
    private sideService: SidebarService,
    private authService: AuthService
  ) { }

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup-menu') && !target.closest('.user-avatar')) {
      this.closeMenu();
    }
  }

}
