import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);
  
    setTimeout(() => {
    
      if(this.data.length > 50)
      {
        
        this.infiniteScroll.complete();        
        this.infiniteScroll.disabled = true;
        return;
      }

      const newArr = Array(20);
      this.data.push( ...newArr );
      this.infiniteScroll.complete();

    }, 1500);
    

  }

}
