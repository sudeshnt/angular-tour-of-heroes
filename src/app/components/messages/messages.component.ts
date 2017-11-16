import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//services
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  constructor(public messageService : MessageService) { } //Angular only binds to public component properties.

  ngOnInit() {
  }

}
