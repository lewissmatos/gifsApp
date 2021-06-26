import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {


  constructor(private data: GifsService) { }

  gifs:any[] = []
  result :string = ''
  ngOnInit(): void {  
    this.result = this.data._historial[0]
    console.log(this.result);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.gifs = this.data.items
  }

}
