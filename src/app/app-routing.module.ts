import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillExperienceComponent } from './skill-experience/skill-experience.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: LandingPageComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'skills', component: SkillExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact-me', component: ContactMeComponent }
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
