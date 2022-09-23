import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router) { }

  public url: string = '';

  ngOnInit(): void {
    this.url = window.location.pathname;
  }


  routeTo(url:string){
    this.url = url;
    this.router.navigateByUrl(url)
  }
}
