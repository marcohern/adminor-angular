import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { OauthService } from 'src/app/shared/services/oauth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  public disabled:string = '';//'btn-loading';
  public name:string = '';

  constructor(public oauth:OauthService) {

  }

  ngOnInit() {
    var user = this.oauth.currentUser;
    if (user !== undefined)
    {
      this.name = user.name;
      console.log("init", this.name);
    }
  }

  save() {
    console.log(this.name);
  }
}
