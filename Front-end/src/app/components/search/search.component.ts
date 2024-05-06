import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  value: string = "";
  lastSearchKey: string = ""

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    this.lastSearchKey = this.value;
  } 

  keyPressed(e: KeyboardEvent){
    
    if(e.code == 'Enter'){
      this.fireSearchEvent();
    }

  }

  onClickSearch(){
      this.fireSearchEvent();
  }


  fireSearchEvent(){
    
    //allow all cases of search except for 
    // sending empty successive search requests
    if(this.value != this.lastSearchKey){
      this.searchEvent.emit(this.value);
      this.lastSearchKey = this.value;
    }
  }


}
