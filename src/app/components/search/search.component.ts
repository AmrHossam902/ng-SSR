import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input()
  value: string = "";

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}


  keyPressed(e: KeyboardEvent){
    
    if(e.code == 'Enter'){
      if(this.value)
        this.searchEvent.emit(this.value);
    }

  }

  onClickSearch(){
    if(this.value)
      this.searchEvent.emit(this.value);
  }


}
