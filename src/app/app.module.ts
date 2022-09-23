import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillExperienceComponent } from './skill-experience/skill-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutMeComponent,
    SkillExperienceComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
