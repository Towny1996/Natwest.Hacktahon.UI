import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective } from "ng2-charts";

@Component({
  selector: "chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input() Accounts: Account[];
  chartType: string = "line";

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: "Account A" },
    { data: [120, 455, 100, 340], label: "Account B" },
    { data: [45, 67, 800, 500], label: "Account C" }
  ];

  chartLabels = ["January", "February", "Mars", "April"];

  constructor() {}

  ngOnInit() {}
}
