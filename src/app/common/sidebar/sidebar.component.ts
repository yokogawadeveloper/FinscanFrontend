import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { SidebarService } from '../sidebar.service';

interface MenuItem {
  icon: string;
  title: string;
  children?: MenuItem[];
  expanded?: boolean;
  path?: string;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  isOpen = false;
  isCollapsed: boolean = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    this.isCollapsed = !this.isCollapsed;

  }

  ngOnInit(): void { }

  menuItems: MenuItem[] = [
    {
      icon: 'fa-window-maximize',
      title: 'Applications',
      children: [
        { icon: '', title: 'App 1', path: 'resource' },
        { icon: '', title: 'App 2', path: 'resource' },
      ],
    },
    {
      icon: 'fa-file',
      title: 'Pages',
      children: [
        { icon: '', title: 'Page 1', path: 'resouce' },
        { icon: '', title: 'Page 2', path: 'resouce' },
      ],
    },
    {
      icon: 'fa-book',
      title: 'Documentation',
      children: [
        { icon: '', title: 'Getting Started', path: 'resouce' },
        { icon: '', title: 'Components', path: 'resouce' },
      ],
    },
  ];

  toolItems: MenuItem[] = [
    {
      icon: 'fa-puzzle-piece',
      title: 'UI Elements',
      children: [
        { icon: '', title: 'Buttons' },
        { icon: '', title: 'Cards' },
      ],
    },
    {
      icon: 'fa-heart',
      title: 'Icons',
      children: [
        { icon: '', title: 'Font Awesome' },
        { icon: '', title: 'Material Icons' },
      ],
    },
    {
      icon: 'fa-wpforms',
      title: 'Forms',
      children: [
        { icon: '', title: 'Basic Forms' },
        { icon: '', title: 'Advanced Forms' },
      ],
    },
    {
      icon: 'fa-table',
      title: 'Tables',
      children: [
        { icon: '', title: 'Basic Tables' },
        { icon: '', title: 'Data Tables' },
      ],
    },
  ];

  toggleItem(item: MenuItem) {
    item.expanded = !item.expanded;
  }

}
