import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-zone-setup-dashboard',
  templateUrl: './zone-setup-dashboard.component.html',
  styleUrls: ['./zone-setup-dashboard.component.css']
})
export class ZoneSetupDashboardComponent implements OnInit {
   sendData:any
  constructor() { }
  ngOnInit(): void {
  }
  onClose(event:any){
    this.sendData =event;
    console.log(this.sendData);
    
  }

}
