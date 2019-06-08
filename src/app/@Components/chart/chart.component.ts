import { Component, OnInit, Input, Output } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'src/app/@Models/chart-data.model';
import { Account } from '../../@Models/account.model'
import { ChartFilterType } from 'src/app/@Enums/chart-filter-type.enum';
import { EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() Accounts: Account[];
  @Output() selectedFormat: EventEmitter<ChartFilterType> = new EventEmitter();

  formatting: ChartFilterType = ChartFilterType.Week;

  chartType: string = "line";
  chartData: ChartData[] = []
  chartLabels = ['January', 'February', 'Mars', 'April', 's', 'ssd'];
  chartOptions = {
    responsive: true
  };

  selectedAccount: number = 0;

  constructor() { }

  ngOnInit() {
    this.selectedFormat.emit(this.formatting);
    this.getChartLabels();
    this.getChartData();
  }

  getChartLabels() {
    switch(this.formatting) {
      case ChartFilterType.Week:
        var startingDate = moment(new Date()).subtract(7, "day").toDate();

    }
  }

  getChartData() {
    const data = new ChartData;
    data.data = [];
    data.label = `Account ${this.selectedAccount + 1}`

    this.Accounts[this.selectedAccount].Transactions.forEach(x => {
      data.data.push(x.Fee);
    })

    this.chartData.push(data);
  }
}
