import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  user:string = '';
  check:string = '';
  count:number = 0;
  label(event:any , input:any){
    this.user = `${event.target.value}`;
    this.count = this.user.length ;
    this.check = input ;
    console.log(input)
    console.log(this.count)
  }
}
