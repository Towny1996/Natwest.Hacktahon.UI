import { Component, OnInit, ModuleWithComponentFactories } from "@angular/core";
import { Account } from '../@Models/account.model';
import { Transaction } from '../@Models/transaction.model';
import { TransactionType } from '../@Enums/transaction-type.enum';
import * as moment from 'moment';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  summaryAmount: string = "£600";
  timePeriod: string = "week";
  mockData: Account[] = [];

  constructor() {}

  ngOnInit() {
    const Account1 = new Account;
    Account1.Name = "Test Account 1";
    Account1.Transactions = [];

    const Transaction1 = new Transaction;
    Transaction1.Amount = 9000;
    Transaction1.Fee = 500;
    Transaction1.Type = TransactionType.Debit;
    Transaction1.Date = moment(new Date()).subtract(1, 'month').toDate();

    const Transaction2 = new Transaction;
    Transaction2.Amount = 120000;
    Transaction2.Fee = 15000;
    Transaction2.Type = TransactionType.Debit;
    Transaction2.Date = moment(new Date()).subtract(20, 'day').toDate();

    const Transaction3 = new Transaction;
    Transaction3.Amount = 20;
    Transaction3.Fee = 2;
    Transaction3.Type = TransactionType.Debit;
    Transaction3.Date = moment(new Date()).subtract(15, 'day').toDate();

    const Transaction4 = new Transaction;
    Transaction4.Amount = 900;
    Transaction4.Fee = 50;
    Transaction4.Type = TransactionType.Debit;
    Transaction4.Date = moment(new Date()).subtract(10, 'day').toDate();

    const Transaction5 = new Transaction;
    Transaction5.Amount = 200;
    Transaction5.Fee = 10;
    Transaction5.Type = TransactionType.Debit;
    Transaction5.Date = moment(new Date()).subtract(5, 'day').toDate();

    const Transaction6 = new Transaction;
    Transaction6.Amount = 155;
    Transaction6.Fee = 6;
    Transaction6.Type = TransactionType.Debit;
    Transaction6.Date = new Date();

    Account1.Transactions.push(Transaction1);
    Account1.Transactions.push(Transaction2);
    Account1.Transactions.push(Transaction3);
    Account1.Transactions.push(Transaction4);
    Account1.Transactions.push(Transaction5);
    Account1.Transactions.push(Transaction6);

    this.mockData.push(Account1);

    console.log(this.mockData)
  }

}
