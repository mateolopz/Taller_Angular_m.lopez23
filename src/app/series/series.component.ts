import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  mean: number = 0;
  constructor(private seriesService: SeriesService) { }

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
}

seasonsAverage(): number {
  let total = 0;
  let count = 0;
  for (const serie of this.series) {
    total = total + (serie.seasons);
    count += 1;
  }
  return total/count;
}

  ngOnInit() {
    this.getSeries();
  }

}
