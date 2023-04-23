import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../services/layout.service';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
import { OauthService } from '../../services/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private body: HTMLBodyElement | any = document.querySelector('body');
  public isCollapsed = true;
 
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    public modalService: NgbModal,
    public SwitcherService: SwitcherService,
    public router: Router,
    private oauth: OauthService,
  ) {
   
  }

  ngOnInit(): void {}

  toggleSidebar() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('body')?.classList.toggle('sidenav-toggled');
    }
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
    document.querySelector('body')?.classList.remove('sidenav-toggled-open');
  }
  
  logout() {
    this.oauth.unauthorize();
    this.router.navigate(['/auth/login']);
  }

  
}
