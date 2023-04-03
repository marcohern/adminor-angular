import { Component } from '@angular/core';
import { OauthService } from './shared/services/oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Adminor';

  constructor(
    private oauth:OauthService
  )
  { }

  ngOnInit() {
    this.oauth.init();
  }
}
