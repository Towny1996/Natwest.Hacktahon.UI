import { Component, OnInit } from "@angular/core";
import { Transaction } from "../@Models/transaction.model";
import { ChartFilterType } from "../@Enums/chart-filter-type.enum";
import { DataService } from "../@Services/data.service";

@Component({
  selector: "app-compare",
  templateUrl: "./compare.component.html",
  styleUrls: ["./compare.component.scss"]
})
export class CompareComponent implements OnInit {
  mockData: Transaction[] = [];

  ngOnInit() {}

  constructor(private dataService: DataService) {
    this.mockData = dataService.MapMockData();
    dataService.GetTransactionItems(this.mockData);
  }

  summaryAmount: string = "£600";
  timePeriod: string = "week";
}
