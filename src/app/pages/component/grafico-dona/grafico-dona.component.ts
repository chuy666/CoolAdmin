import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
    // Doughnut
    @Input() data: any ;
    /**/
    public doughnutChartLabels: string[] ;
    public doughnutChartData: number[] ;
    public doughnutChartType: string ;
    public doughnutChartLeyenda: string ;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.doughnutChartLabels = this.data['labels'];
    this.doughnutChartData = this.data['data'];
    this.doughnutChartType  = this.data['type'];
    this.doughnutChartLeyenda = this.data.leyenda;
  }

}
