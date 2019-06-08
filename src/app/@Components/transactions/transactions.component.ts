import { Component, OnInit, Input, Output } from "@angular/core";
import { Transaction } from "src/app/@Models/transaction.model";
import * as moment from "moment";

@Component({
  selector: "transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Transaction[];
  @Input() period: string;
  weekTransactions: Transaction[];

  getWeekTransactions(transactions) {
    return transactions.filter(transaction => {
      const dayDiff = moment(transaction.Date).diff(moment(new Date()), "days");
      return dayDiff >= -8;
    });
  }

  ngOnInit() {
    this.weekTransactions = this.getWeekTransactions(this.transactions);

    console.log(this.weekTransactions);
  }

  formatDate(date) {
    return moment(date).format("dddd");
  }
}
