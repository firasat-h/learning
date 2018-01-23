import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // should be public because we will bind it to the template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
