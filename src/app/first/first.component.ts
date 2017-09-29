import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  animations: [
    routerTransition(),    
  ],
  host: {'[@routerTransition]': ''}
})
export class FirstComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  

}
