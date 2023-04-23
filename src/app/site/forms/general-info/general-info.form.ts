import { Component } from '@angular/core';

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

  updateTitle(event:Event) {
    console.log("updateTitle", this.title);
  }

  updateSubtitle(event:Event) {
    console.log("updateSubtitle", this.subtitle);
  }

  updateLogo(event:Event) {
    const target = event.currentTarget as HTMLInputElement;
    console.log("updateLogo", target.files);
  }

  updateLogoBw(event:Event) {
    const target = event.currentTarget as HTMLInputElement;
    console.log("updateLogoBw", event, target.files);
  }

  submit() {
    let data = {
      title: this.title,
      subtitle: this.subtitle,
      logo: this.logo,
      logoBw: this.logoBw
    };
    console.log("submit", data);
  }
}
