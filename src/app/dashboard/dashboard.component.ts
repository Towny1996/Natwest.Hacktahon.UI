import { Component, OnInit, ModuleWithComponentFactories } from "@angular/core";
import { Transaction } from '../@Models/transaction.model';
import { ChartFilterType } from '../@Enums/chart-filter-type.enum';
import * as moment from 'moment';
import { FeeType } from '../@Enums/fee-type.enum';
import { TransactionType } from '../@Enums/transaction-type.enum';
import { Account } from "../@Models/account.model";

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

  constructor() {}

  ngOnInit() {
    const transaction1 = new Transaction();
    transaction1.AMT = 1000;
    transaction1.Account = "Natwest Business Account"
    transaction1.Date = moment(new Date()).subtract(7, "day").toDate();
    transaction1.FeeType = FeeType.TRF;
    transaction1.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction1);

    const transaction2 = new Transaction();
    transaction2.AMT = 1000;
    transaction2.Account = "Natwest Business Account"
    transaction2.Date = moment(new Date()).subtract(6, "day").toDate();
    transaction2.FeeType = FeeType.TRF;
    transaction2.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction2);

    const transaction3 = new Transaction();
    transaction3.AMT = 10000;
    transaction3.Account = "Natwest Premium Account"
    transaction3.Date = moment(new Date()).subtract(5, "day").toDate();
    transaction3.FeeType = FeeType.TRF;
    transaction3.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction3);

    const transaction4 = new Transaction();
    transaction4.AMT = 3400;
    transaction4.Account = "Natwest Premium Account"
    transaction4.Date = moment(new Date()).subtract(4, "day").toDate();
    transaction4.FeeType = FeeType.TRF;
    transaction4.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction4);

    const transaction5 = new Transaction();
    transaction5.AMT = 2200;
    transaction5.Account = "Natwest Premium Account"
    transaction5.Date = moment(new Date()).subtract(3, "day").toDate();
    transaction5.FeeType = FeeType.TRF;
    transaction5.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction5);

    const transaction6 = new Transaction();
    transaction6.AMT = 100;
    transaction6.Account = "Natwest Business Account"
    transaction6.Date = moment(new Date()).subtract(2, "day").toDate();
    transaction6.FeeType = FeeType.TRF;
    transaction6.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction6);

    const transaction7 = new Transaction();
    transaction7.AMT = 5600;
    transaction7.Account = "Natwest Business Account"
    transaction7.Date = moment(new Date()).subtract(1, "day").toDate();
    transaction7.FeeType = FeeType.TRF;
    transaction7.PaymentType = TransactionType.Debit;

    this.mockData.push(transaction7);
  }
}
