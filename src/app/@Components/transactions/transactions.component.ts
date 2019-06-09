import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "src/app/@Models/transaction.model";
import * as moment from "moment";
import { TransactionItem } from "src/app/@Models/transaction-item.model";
import { TransactionType } from "src/app/@Enums/transaction-type.enum";
import { FeeType } from 'src/app/@Enums/fee-type.enum';
import { DataService } from 'src/app/@Services/data.service';

@Component({
  selector: "transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Transaction[];
  @Input() period: string;
  detailDays: object = {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  };

  TransactionType = TransactionType;
  FeeType = FeeType;

  public GetTransactionItems = () => { return this.dataService.transactionItems; }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {}

  showDay(day) {
    this.detailDays[day] = !this.detailDays[day];
  }

  formatDate(date) {
    return moment(date).format("dddd Do MMMM");
  }
}
