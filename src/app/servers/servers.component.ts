import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddNewServer = false;
  serverCreationStatus = 'No server is created!';
  serverName = 'my Docker';
  serverCreated = false;
  servers = ['test server' , 'test server 2'];


  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // tslint:disable-next-line:typedef
  updateServerName(event: Event){
    // this.serverName = (<HTMLInputElement> event.target).value;
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
