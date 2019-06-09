import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "src/app/@Models/transaction.model";
import * as moment from "moment";
import { TransactionItem } from "src/app/@Models/transaction-item.model";
import { TransactionType } from "src/app/@Enums/transaction-type.enum";

@Component({
  selector: "transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Transaction[];
  @Input() period: string;
  transactionItems: TransactionItem[] = [];
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

  createTransactionObject() {
    let sevenDaysAgo = moment(new Date())
      .subtract(7, "day")
      .toDate();

    while (sevenDaysAgo.getDate() !== new Date().getDate()) {
      const item = new TransactionItem();

      item.Day = moment(sevenDaysAgo).format("dddd");
      item.Transactions = this.transactions.filter(
        x => x.Date.getDate() == sevenDaysAgo.getDate()
      );

      item.Amount = item.Transactions.reduce((acc, currentValue) => {
        return (acc += currentValue.AMT);
      }, 0);

      this.transactionItems.push(item);

      sevenDaysAgo = moment(sevenDaysAgo)
        .add(1, "day")
        .toDate();
    }

    console.log(this.transactionItems);
  }

  ngOnInit() {
    this.createTransactionObject();
  }

  showDay(day) {
    this.detailDays[day] = !this.detailDays[day];
  }

  formatDate(date) {
    return moment(date).format("dddd Do MMMM");
  }
}
