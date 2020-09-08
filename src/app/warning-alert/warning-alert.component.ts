import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is an warning. you are in danger!</p>
  `,
  styles: [`
    p{
      padding: 20px;
      background-color: mistyrose;
      border:1px solid darkred ;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
