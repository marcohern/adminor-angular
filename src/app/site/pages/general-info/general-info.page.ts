import { Component } from '@angular/core';

@Component({
  selector: 'site-general-info-page',
  templateUrl: './general-info.page.html',
  styleUrls: ['./general-info.page.scss']
})
export class GeneralInfoPage {
  ngOnInit() {
    console.log("GeneralInfoPage.ngOnInit");
  }
}
