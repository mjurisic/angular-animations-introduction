import { Component, OnInit } from '@angular/core';
import {trigger, animate, style, state, transition, query, stagger} from '@angular/animations'

@Component({
  selector: 'app-livedemo',
  templateUrl: './livedemo.component.html',
  styleUrls: ['./livedemo.component.css'],
  animations:[
    trigger('myanimation', [
      state('inactive', style({opacity:0})),
      state('active', style({opacity:1})),

        transition('inactive => active', animate(1000))

    ]),

    trigger('listAnimation', [
        transition('*<=>*', [
          query('p', style({transform: 'translateX(-100%)'})),
          query('p', 
            stagger('200ms', [
              animate('1000ms', style({transform:'translateX(0)'}))
            ]))
        ])
    ])
  ], 

})
export class LivedemoComponent implements OnInit {

  myanimstate = 'inactive';

  items = [
    {title:'first'},
    {title:'second'},
    {title:'third'},
  ]

  constructor() { }

  ngOnInit() {
  }

  runAnimation() {
    this.myanimstate = 'active'
  }
  handleStart($event) {
    console.log('yay, animation started', $event)
  }

}
