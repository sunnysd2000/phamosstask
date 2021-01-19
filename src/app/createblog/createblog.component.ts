import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mypost(message:any){
    alert("Posted successfully")
  }
  mysubmit(title:any){
    alert('Your blog "'+ title +'" posted successfully');
    location.href="/"
  }

}
