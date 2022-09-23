import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { TypeTextComponent } from './type-text/type-text.component';



@NgModule({
  declarations: [
    SideNavComponent,
    TypeTextComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SideNavComponent]
})
export class SharedModule { }
