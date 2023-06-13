import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepwComponent } from './changepw/changepw.component';
import { DefaultProfileComponent } from './default-profile/default-profile.component';
import { HelpHeaderComponent } from './help/help-header.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpRiderComponent } from './help-rider/help-rider.component';
import { LostPropertyComponent } from './lost-property/lost-property.component';
import { GmailComponent } from './gmail/gmail.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QuestionComponent } from './question/question.component';
import { ComplaintComponent } from './complaint/complaint.component';


const routes: Routes = [
  {path:'', redirectTo:'Profile', pathMatch:'full'},
  {path:'editprofile', component:ProfileComponent},
  {path:'Profile', component:DefaultProfileComponent},
  {path:'help',component:HelpHeaderComponent},
  {path:'changepassword',component:ChangepwComponent},
  {path:'helpRiders',component:HelpRiderComponent},
  {path:'lostproperty',component:LostPropertyComponent},
  {path:'addemail',component:GmailComponent},
  {path:'messages',component:ViewMessagesComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'question',component:QuestionComponent},
  {path: 'complaint',component:ComplaintComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
