import { Component, OnInit, Input, Output } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'src/app/@Models/chart-data.model';
import { ChartFilterType } from 'src/app/@Enums/chart-filter-type.enum';
import { EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Transaction } from 'src/app/@Models/transaction.model';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { FeeType } from 'src/app/@Enums/fee-type.enum';

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {

  @Input() Transactions: Transaction[];
  @Output() selectedFormat: EventEmitter<ChartFilterType> = new EventEmitter();

  formatting: ChartFilterType = ChartFilterType.Week;

  chartType: string = "line";
  chartData: ChartData[] = [];
  chartLabels = [];
  chartOptions = {
    responsive: true
  };
  chartColors: any[] = [{ 
    backgroundColor:["#7389ae", "#7389ae", "#7389ae", "#7389ae", "#7389ae", "#7389ae", "#7389ae"] 
  }];

  selectedAccount: string;

  constructor() { }

  ngOnInit() {
    this.selectedFormat.emit(this.formatting);
    this.selectedAccount = this.Transactions[0].Account;
    this.getChartLabels();
    this.getChartData();
  }

  getChartLabels() {
    switch(this.formatting) {
      case ChartFilterType.Week:
        var startingDate = moment(new Date()).subtract(7, "day").toDate();
        while (startingDate.getDate() != new Date().getDate()) {
          this.chartLabels.push(moment(startingDate).format('dddd'));
          startingDate = moment(startingDate).add(1, "day").toDate();
        }
    }
  }

  getChartData() {
    const data = new ChartData;
    data.data = [];
    data.label = this.selectedAccount;

    switch(this.formatting) {      
      case ChartFilterType.Week:
          var startingDate = moment(new Date()).subtract(7, "day").toDate();
          while (startingDate.getDate() != new Date().getDate()) {
            var amt = this.Transactions.filter(x => (x.Date.getDate() == startingDate.getDate() && x.Account === this.selectedAccount)).reduce((x, y) => x += (y.FeeType === FeeType.TRF ? 0.50 : 0.70) , 0);
            data.data.push(amt);
            startingDate = moment(startingDate).add(1, "day").toDate();
          }
    }

    this.chartData.push(data);
  }

  GetUniqueBanks(){
    return [...new Set(this.Transactions.map(x => x.Account))]
  }
}
