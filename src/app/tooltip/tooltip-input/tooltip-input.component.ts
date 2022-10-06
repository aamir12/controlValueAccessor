import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-input',
  templateUrl: './tooltip-input.component.html',
  styleUrls: ['./tooltip-input.component.scss']
})
export class TooltipInputComponent implements OnInit {

  tooltips = [
    {
      title : 'Tooltip 1',
      description : 'Lorem data 1'
    },
    {
      title : 'Tooltip 2',
      description : 'Lorem data 2'
    }
  ]
  constructor() { }
  
  
  ngOnInit(): void {
  }

 

}
