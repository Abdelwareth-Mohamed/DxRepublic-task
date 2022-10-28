import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-offers',
  templateUrl: './home-offers.component.html',
  styleUrls: ['./home-offers.component.scss']
})
export class HomeOffersComponent implements OnInit {
  miniClass:boolean=false;
  more:boolean=false;
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
  showMore()
  {
    this.more=!this.more;
  }
}
