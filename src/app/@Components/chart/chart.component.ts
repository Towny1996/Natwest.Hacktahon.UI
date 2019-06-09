import { Component, OnInit, Input, Output } from '@angular/core';
import { ChartData } from 'src/app/@Models/chart-data.model';
import { ChartFilterType } from 'src/app/@Enums/chart-filter-type.enum';
import { EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Transaction } from 'src/app/@Models/transaction.model';
import { FeeType } from 'src/app/@Enums/fee-type.enum';
import { DataService } from 'src/app/@Services/data.service';
import { TransactionItem } from 'src/app/@Models/transaction-item.model';

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {

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

  public GetTransactionItems = () => { return this.dataService.transactionItems; }

  public GetSelectedAccount = () => { return this.dataService.selectedAccount; }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedFormat.emit(this.formatting);
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
    this.chartData = [];
    
    const data = new ChartData;
    data.data = [];
    data.label = this.GetSelectedAccount();

    switch(this.formatting) {      
      case ChartFilterType.Week:
        this.GetTransactionItems().forEach(x => {
          data.data.push(Math.round(x.FeeAmount * 100) / 100);
        })
    }

    this.chartData.push(data);
  }

  getUniqueAccounts() {
    return [...new Set(this.dataService.mockData.map(x => x.Account))];
  }

  updateSelectedAccount(account) {
    this.dataService.selectedAccount = account;

    this.dataService.GetTransactionItems(this.dataService.MapMockData());

    this.getChartData();
  }
}
