import { Component, OnInit,HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})
export class AppNavBarComponent implements OnInit {

  togglebar:boolean=false;
  constructor() {
  		
  }

  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
	  this.togglebar=false;
	}
  onToggleBarClick():void
  {
  	console.log("toggle initated");
    this.togglebar=!this.togglebar;
    console.log(this.togglebar);
  }

}
