import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Event:any=[];
  calendarOptions!:CalendarOptions;

  onDateClick(res:{dateStr:String}){

    if(this.Event.length>=2){

     alert("index number is deleted "+this.Event.splice(1,1));
     
     if((this.Event.length<=2)&&(this.Event.length>1)){
      alert("Your Selected date "+this.Event);
    }
    }

    this.Event.push(res.dateStr);
    alert("Your Selected "+res.dateStr);

    if((this.Event.length<=2)&&(this.Event.length>1)){
      alert("Your Selected date "+this.Event);
    }

    console.log(this.Event);
  }
  ngOnInit() { 
    setTimeout(()=>{
      this.calendarOptions={
        initialView:'dayGridMonth',
        dateClick:this.onDateClick.bind(this),
        events:this.Event
      };
    },1000)
  }

}
