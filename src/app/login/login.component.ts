import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, keyframes, animate, transition, style, state } from '@angular/animations';
import {LoginService} from './login.service'
import { routerTransition } from '../animations'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
    host: {'[@routerTransition]': ''},
  animations: [
    routerTransition(),
    trigger('wobble', [
      transition('inactive <=> active', animate('0.25s', keyframes([
        style({ transform: 'translateX(-5%)', offset: .25, color: 'red' }),
        style({ transform: 'translateX(0)', offset: .50 }),
        style({ transform: 'translateX(+5%)', offset: .75 }),
        style({ transform: 'translateX(0)', offset: 1}),
      ])))])]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  wobbleState: string = 'inactive';

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit() {
  }

  doLogin(username, password) {
    if (this.loginService.doLogin(username, password)) {
        this.router.navigate(['first']);
    }
    else {
      this.wobbleState = 'active';
    }
  }
}
 