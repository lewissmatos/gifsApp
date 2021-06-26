import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: string[] = []
  
  get history() {
    return [...this._historial]
  }

  searchGifs(query: string) {
    
    this._historial.unshift(query)

  }

}
