import { Component } from '@angular/core';
import { SidebarService } from '../common/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private sidebarService: SidebarService) { }
  
  
  onContentClick() {
    this.sidebarService.closeSidebar();
  }

}
