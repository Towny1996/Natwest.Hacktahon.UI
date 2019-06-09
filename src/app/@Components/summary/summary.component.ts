import { Component, OnInit, Input } from "@angular/core";
import { DataService } from 'src/app/@Services/data.service';

@Component({
  selector: "summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {

  @Input() timePeriod: string;
  
  public GetTransactionItems = () => { return this.dataService.transactionItems; }

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  GetSummary() {
    return this.GetTransactionItems().reduce((acc, curr) => acc += curr.Amount, 0);
  }

  GetFeesAmount() {
    return this.GetTransactionItems().reduce((acc, curr) => acc += curr.FeeAmount, 0);
  }

}
