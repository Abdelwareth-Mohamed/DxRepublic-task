import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  miniClass:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
onResize()  {
    if (window.innerWidth < 576) {
      this.miniClass = true;
     
    } else {
      this.miniClass = false;
     
    }
  }

}

