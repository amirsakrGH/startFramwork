import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  flag:boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
  const scrollHeight = window.scrollY;

    console.log(scrollHeight)
  if (scrollHeight > 30) {
    this.flag = true ;
  } else {
    this.flag = false;
  }
}
}




