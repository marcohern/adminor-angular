import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { QueryUsersComponent } from './users/query-users/query-users.component';
import { UpdateEmailComponent } from './users/update-email/update-email.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'me',
        title: 'My Profile',
        component: MyProfileComponent,
      },
      {
        path: 'users',
        title: 'Query Users',
        component: QueryUsersComponent,
      },
      {
        path: 'update-email',
        title: 'Update Email',
        component: UpdateEmailComponent,
      },
      {
        path: 'update-password',
        title: 'Update Password',
        component: UpdatePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcohernRoutingModule {}
