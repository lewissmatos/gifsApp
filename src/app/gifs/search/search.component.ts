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
    this.gifsData.search(this.gifsData.arrData[0])
  }

  @ViewChild('seachVaue') seachVaue!: ElementRef

  value: string = ''
  
  search() {

    this.value = this.seachVaue.nativeElement.value

    if (this.value.trim().length === 0) {
      return
    } else
    this.gifsData.searchGifs(this.value)
    
    this.seachVaue.nativeElement.value = ''

    this.gifsData.search(this.value)
  }

  
}
