import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
  }

}
