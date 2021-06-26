import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private data: GifsService) {
  }

  history: string[] = []
  
  ngOnInit(): void {
    this.getHistory()
  }
  
  ngDoCheck(): void {
    this.getHistory()
  }

  getHistory() {
    this.history = this.data.history
  }

  search(item: string) {
    this.data.search(item)
  }
}
