import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-primary-button',
  templateUrl: './app-primary-button.component.html',
  styleUrls: ['./app-primary-button.component.css']
})
export class AppPrimaryButtonComponent implements OnInit {

  @Input() id: number = 0;
@Output() onClickEvent = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }

}
