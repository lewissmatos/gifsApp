import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private gifsData: GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('seachVaue') seachVaue!: ElementRef

  search() {

    let value = this.seachVaue.nativeElement.value

    this.gifsData.searchGifs(value)
    
    this.seachVaue.nativeElement.value = ''
  }

  
}
