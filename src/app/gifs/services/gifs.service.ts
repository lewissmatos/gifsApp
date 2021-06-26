import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {
    let arr:any =  localStorage.getItem('items')?.split(',')
    console.log(arr);
    this._historial = arr
   }

  private _historial: string[] = []
  private apikey: string = 'x3Bg2WCOHUhVQbdwQDbM9SDhY2nwQxoi'
  
  private urlGifs :string = 'https://api.giphy.com/v1/gifs/search'
  private urlStickes :string = 'https://api.giphy.com/v1/stickers/search'
  
  public items: any[] = []
  
  search(query:string) {
    return this.http.get<any>(`${this.urlGifs}?api_key=${this.apikey}&q=${query}&limit=10`).subscribe(
      res => {      
        this.items = res.data
      }
    )
  }

  get history() {
    return [...this._historial]
  }

  searchGifs(query: string) {

    query.trim().toLocaleLowerCase()
    
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)
      let lS = this._historial.toString()
      localStorage.setItem('items', lS)
    }

  }

}
