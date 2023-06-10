import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepwComponent } from './changepw/changepw.component';
import { DefaultProfileComponent } from './default-profile/default-profile.component';
import { HelpHeaderComponent } from './help/help-header.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'Profile', pathMatch:'full'},
  {path:'editprofile', component:ProfileComponent},
  {path:'Profile', component:DefaultProfileComponent},
  {path:'help',component:HelpHeaderComponent},
  {path:'changepassword',component:ChangepwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
