import { Component } from '@angular/core';
import { SiteHeaders } from 'src/app/shared/models/site-headers';
import { SiteHeadersService } from 'src/app/shared/services/site-headers.service';

@Component({
  selector: 'site-general-info-page',
  templateUrl: './general-info.page.html',
  styleUrls: ['./general-info.page.scss']
})
export class GeneralInfoPage {

  public siteHeaders: SiteHeaders =  new SiteHeaders();

  public constructor(
    private headersService:SiteHeadersService
  ) {
  }

  ngOnInit() {
    console.log("GeneralInfoPage.ngOnInit");
    this.headersService.read().subscribe(data => {
      this.siteHeaders = data;
      console.log("GeneralInfoPage.ngOnInit.headersService.read",this.siteHeaders);
    });
    
  }
}
