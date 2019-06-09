import { Component, OnInit } from "@angular/core";
import { Transaction } from "../@Models/transaction.model";
import { ChartFilterType } from "../@Enums/chart-filter-type.enum";
import { DataService } from "../@Services/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  selectedFormat: ChartFilterType;
  summaryAmount: string = "£600";
  timePeriod: string = "week";

  mockData: Transaction[] = [];

  constructor(private dataService: DataService) {
    this.mockData = dataService.MapMockData();
    dataService.GetTransactionItems(this.mockData);
  }

  ngOnInit() {}
}
