import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  constructor() {}

  @Input() summaryAmount: string;
  @Input() timePeriod: string;
  ngOnInit() {}
}
