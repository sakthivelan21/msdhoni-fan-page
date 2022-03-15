import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../model/LinkModel';

@Component({
  selector: 'app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.css']
})
export class AppSideBarComponent implements OnInit {

  linkObjectArray:Array<LinkModel> = [
  	
  	{
  		"link":"#main-section-introduction",
  		"text":"Introduction"
  	},
  	{
  		"link":"#main-section-career",
  		"text":"Career"
  	},
  	{
  		"link":"#main-section-playing-style",
  		"text":"Playing Style"
  	},
  	{
  		"link":"#main-section-dhoni-quotes",
  		"text":"Dhoni's Quote"
  	},
  	{
  		"link":"#main-section-references",
  		"text":"References"
  	}
  ];
  constructor() {
  	
   }

  ngOnInit(): void {
  }

}
