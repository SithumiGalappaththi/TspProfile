import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule}from'@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { DefaultProfileComponent } from './default-profile/default-profile.component';
import { HelpHeaderComponent } from './help/help-header.component';
import { ChangepwComponent } from './changepw/changepw.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { DriverProfileEditComponent } from './driver-profile-edit/driver-profile-edit.component';
import { HelpRiderComponent } from './help-rider/help-rider.component';
import { LostPropertyComponent } from './lost-property/lost-property.component';
import { GmailComponent } from './gmail/gmail.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';
import { QuestionComponent } from './question/question.component';
import { ComplaintComponent } from './complaint/complaint.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    DefaultProfileComponent,
    HelpHeaderComponent,
    ChangepwComponent,
    ContactUsComponent,
    FooterComponent,
    DriverProfileComponent,
    DriverProfileEditComponent,
    HelpRiderComponent,
    LostPropertyComponent,
    GmailComponent,
    ViewMessagesComponent,
    QuestionComponent,
    ComplaintComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
