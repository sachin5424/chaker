import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
   DashboardTable:any[] =[
     { 
       _id:1, 
       title:"IOCL Kanpur (UCP152)",
       location:"kanpur",
       imeiNo:876543245678,
       goLive:true,
       date:Date.now(),
       power:true,
     },
     { 
      _id:1, 
      title:"SCW-5 (UCP152)",
      location:"New Delhi",
      imeiNo:876543245678,
      goLive:true,
      date:Date.now(),
      power:false,
    },
  
     { 
      _id:1, 
      title:"Taj (UCP152)",
      location:"kanpur",
      imeiNo:876543245678,
      goLive:true,
      date:Date.now(),
      power:true,
    },
  
     { 
      _id:1, 
      title:"Chakr Innovation (UCP152)",
      location:"kanpur",
      imeiNo:876543245678,
      goLive:true,
      date:Date.now(),
      power:false,
    },
  
     { 
      _id:1, 
      title:"IOCL Kanpur (UCP152)",
      location:"kanpur",
      imeiNo:876543245678,
      goLive:true,
      date:Date.now(),
      power:false,
    },

     { 
      _id:1, 
      title:"IOCL Kanpur (UCP152)",
      location:"kanpur",
      imeiNo:876543245678,
      goLive:true,
      date:Date.now(),
      power:false,
    },
    
   ]
  constructor(private breakpointObserver: BreakpointObserver) {}


}
