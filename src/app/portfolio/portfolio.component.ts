import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgSrc:string ='';
  flag:boolean = false;
  clicked(item:string){
    console.log(item)
    if(item === 'one'){
      this.imgSrc = 'assets/images/portfolio/poert1.png';
      this.flag =true;
    }else if (item === 'two'){
      this.imgSrc = 'assets/images/portfolio/port2.png';
      this.flag =true;
    }else if (item === 'three'){
      this.imgSrc = 'assets/images/portfolio/port3.png';
      this.flag =true;
    }
  }
  close(){
    this.imgSrc='';
    this.flag= false;
  }
}
