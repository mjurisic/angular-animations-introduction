import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations' 
import { trigger, keyframes, animate, transition, style, state } from '@angular/animations';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  animations: [
    routerTransition(),
    trigger('rbutton',[
      state('left', style({transform: 'translateX(0)'})),
      state('right', style({transform: 'translateX(220px)'})),


      transition('left => right', animate(200)),
      transition('right => left', animate(200))
    ]),
    trigger('abutton',[
      transition('* => active',[
        animate(500, style({transform: 'scale(1.4)'}))
      ])
      
    ])
  ],
  host: {'[@routerTransition]': ''}
})
export class SecondComponent implements OnInit {

  rstate = 'left';
  

  constructor() { }

  ngOnInit() {
  }

  changeReactState() {
    this.rstate = this.rstate == 'left' ? 'right' : 'left';
  }
}
