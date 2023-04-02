import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryUsersComponent } from './users/query-users/query-users.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { UpdateEmailComponent } from './users/update-email/update-email.component';
import { MarcohernRoutingModule } from './marcohern-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QueryUsersComponent,
    MyProfileComponent,
    UpdatePasswordComponent,
    UpdateEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MarcohernRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarcohernModule { }
