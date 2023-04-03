import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OauthService } from 'src/app/shared/services/oauth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  public disabled = 'btn-loading';
  public name:FormControl = new FormControl('');

  constructor(private oauth:OauthService) {

  }

  ngOnInit() {
    console.log("init", this.oauth.currentUser?.name);
    this.name.setValue(this.oauth.currentUser?.name);
  }

  save() {
    console.log(this.name.value);
  }
}
