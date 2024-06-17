import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserListItemComponent,
    UserAvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserListItemComponent,
    UserAvatarComponent
  ]
})
export class UsersModule { }
