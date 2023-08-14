import { Component, Input } from '@angular/core';
import { SiteHeaders } from 'src/app/shared/models/site-headers';
import { SiteHeadersService } from 'src/app/shared/services/site-headers.service';

@Component({
  selector: 'site-general-info-form',
  templateUrl: './general-info.form.html',
  styleUrls: ['./general-info.form.scss']
})
export class GeneralInfoForm {
  public title:string = '';
  public subtitle:string = '';
  public logo:string = '';
  public logoBw:string = '';
  public disable:boolean = false;

  @Input()
  public siteHeaders:SiteHeaders = new SiteHeaders();

  public constructor(
    private siteHeadersService:SiteHeadersService
  ) {
  }

  ngOnInit() {
    console.debug("GeneralInfoForm.ngOnInit", this.siteHeaders);
  }

  ngOnChanges() {
    console.debug("GeneralInfoForm.ngOnChanges", this.siteHeaders);
    this.title = this.siteHeaders.title;
    this.subtitle = this.siteHeaders.subtitle;
    //this.logo = this.siteHeaders.logoUrl;
    //this.logoBw = this.siteHeaders.logoBwUrl;
  }

  updateTitle(event:Event) {
    console.debug("GeneralInfoForm.updateTitle", this.title);
  }

  updateSubtitle(event:Event) {
    console.debug("GeneralInfoForm.updateSubtitle", this.subtitle);
  }

  updateLogo(event:Event) {
    const target = event.currentTarget as HTMLInputElement;
    console.log("GeneralInfoForm.updateLogo", event, target.files);
  }

  updateLogoBw(event:Event) {
    const target = event.currentTarget as HTMLInputElement;
    console.log("GeneralInfoForm.updateLogoBw", event, target.files);
  }

  submit() {
    this.siteHeaders.title = this.title;
    this.siteHeaders.subtitle = this.subtitle;
    this.siteHeadersService.write(this.siteHeaders);
  }
}
