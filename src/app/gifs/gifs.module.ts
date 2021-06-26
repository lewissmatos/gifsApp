import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    GifsPagesComponent,
    SearchComponent,
    ResultsComponent
  ],
  exports: [
    GifsPagesComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }
