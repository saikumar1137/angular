import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  
  todaydate = new Date();

  items = ["GYM", "WORK", "PAY BILLS"];
  newItem = "";
  pushItem = function() {
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }

  }
  removeItem = function(index){
    this.items.splice(index, 1);
  }



  
  constructor() { }

  
  
  ngOnInit(): void{
    
  }

  
 
    
} 




