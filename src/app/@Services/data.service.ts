import { Injectable } from "@angular/core";
import { Transaction } from "../@Models/transaction.model";
import { TransactionType } from "../@Enums/transaction-type.enum";
import { FeeType } from "../@Enums/fee-type.enum";
import * as moment from "moment";
import { TransactionItem } from "../@Models/transaction-item.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  crapData = [
    ["2019-06-02T02:59:43.1Z", "Dbit", 100.0, "TRF", "Account1", false, ""],
    [
      "2019-06-02T02:59:43.1Z",
      "Dbit",
      100.0,
      "TRF",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-05-03T02:59:43.1Z", "CRDT", 100.0, "TRF", "Account1", false, "", ""],
    [
      "2019-05-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "TRF",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-06-03T02:59:43.1Z", "DBIT", 100.0, "IPO", "Account1", false, ""],
    [
      "2019-06-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-05-01T02:59:43.1Z", "CRDT", 100.0, "IPO", "Account1", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-06-04T02:59:43.1Z", "DBIT", 100.0, "PAY", "Account1", false, ""],
    [
      "2019-06-04T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-05-01T02:59:43.1Z", "CRDT", 100.0, "PAY", "Account1", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-05-01T02:59:43.1Z", "DBIT", 100.0, "1855", "Account1", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-06-05T02:59:43.1Z", "CRDT", 100.0, "1855", "Account1", false, ""],
    [
      "2019-06-05T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-05-01T02:59:43.1Z", "DBIT", 100.0, "SPIT", "Account1", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-05-06T02:59:43.1Z", "CRDT", 100.0, "SPIT", "Account1", false, ""],
    [
      "2019-05-06T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-06-06T02:59:43.1Z", "DBIT", 100.0, "MMD", "Account1", false, ""],
    [
      "2019-06-06T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-06-07T02:59:43.1Z", "CRDT", 100.0, "MMD", "Account1", false, ""],
    [
      "2019-06-07T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-06-08T02:59:43.1Z", "DBIT", 100.0, "SPIN", "Account1", false, ""],
    [
      "2019-06-08T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-06-09T02:59:43.1Z", "DBIT", 100.0, "SPIN", "Account1", false, ""],
    [
      "2019-06-09T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-05-01T02:59:43.1Z", "DBIT", 100.0, "SPOU", "Account1", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-06-03T02:59:43.1Z", "DBIT", 100.0, "SPOU", "Account1", false, ""],
    [
      "2019-06-02T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Account1",
      true,
      "FEE CR"
    ],

    ["2019-06-04T02:59:43.1Z", "DBIT", 8.0, "", "Account1", true, "A/C FEE"],
    ["2019-06-05T02:59:43.1Z", "DBIT", 44.17, "", "Account1", true, "INT CR"],
    ["2019-06-02T02:59:43.1Z", "DBIT", 160.71, "", "Account1", true, "INT DR"],

    ["2019-05-01T02:59:43.1Z", "Dbit", 100.0, "TRF", "Account1", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "Dbit",
      100.0,
      "TRF",
      "Account1",
      true,
      "FEE DR"
    ],

    ["2019-05-01T02:59:43.1Z", "CRDT", 100.0, "TRF", "Account2", false, "", ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "TRF",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-05T02:59:43.1Z", "DBIT", 100.0, "IPO", "Account2", false, ""],
    [
      "2019-06-09T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-06-08T02:59:43.1Z", "CRDT", 100.0, "IPO", "Account2", false, ""],
    [
      "2019-06-08T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-05-01T02:59:43.1Z", "DBIT", 100.0, "PAY", "Account2", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-06-01T02:59:43.1Z", "CRDT", 100.0, "PAY", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-03T02:59:43.1Z", "DBIT", 100.0, "1855", "Account2", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-06-01T02:59:43.1Z", "CRDT", 100.0, "1855", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-01T02:59:43.1Z", "DBIT", 100.0, "SPIT", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-05-01T02:59:43.1Z", "CRDT", 100.0, "SPIT", "Account2", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-01T02:59:43.1Z", "DBIT", 100.0, "MMD", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-05-01T02:59:43.1Z", "CRDT", 100.0, "MMD", "Account2", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-01T02:59:43.1Z", "DBIT", 100.0, "SPIN", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-06-01T02:59:43.1Z", "DBIT", 100.0, "SPIN", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-01T02:59:43.1Z", "DBIT", 100.0, "SPOU", "Account2", false, ""],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Account2",
      true,
      "FEE DR"
    ],

    ["2019-05-01T02:59:43.1Z", "DBIT", 100.0, "SPOU", "Account2", false, ""],
    [
      "2019-05-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Account2",
      true,
      "FEE CR"
    ],

    ["2019-06-01T02:59:43.1Z", "DBIT", 12.0, "", "Account2", true, "A/C FEE"],
    ["2019-06-01T02:59:43.1Z", "DBIT", 17.17, "", "Account2", true, "INT CR"],
    ["2019-06-01T02:59:43.1Z", "DBIT", 19.71, "", "Account2", true, "INT DR"]
  ];

  mockData: Transaction[] = [];

  transactionItems: TransactionItem[] = [];

  selectedAccount: string;

  constructor() {}

  MapMockData() {
    this.mockData = [];

    this.crapData.forEach(x => {
      const tran = new Transaction();
      tran.Date = moment(x[0].toString()).toDate();
      tran.PaymentType =
        x[1].toString().toLowerCase() === "dbit"
          ? TransactionType.Debit
          : TransactionType.Credit;
      tran.AMT = parseInt(x[2].toString());
      tran.FeeType = x[3] === "TRF" ? FeeType.TRF : FeeType.IPO;
      tran.Account = x[4].toString();
      tran.Fee = x[3] === "TRF" ? 0.5 : 0.7;

      this.mockData.push(tran);
    });

    if (this.selectedAccount == null)
      this.selectedAccount = this.mockData[0].Account;

    return this.mockData;
  }

  GetTransactionItems(transactions: Transaction[]) {
    this.transactionItems = [];

    let sevenDaysAgo = moment(new Date())
      .subtract(7, "day")
      .toDate();

    while (sevenDaysAgo.getDate() !== new Date().getDate()) {
      const item = new TransactionItem();

      item.Day = moment(sevenDaysAgo).format("dddd");
      item.Transactions = transactions.filter(
        x =>
          x.Date.getDate() == sevenDaysAgo.getDate() &&
          x.Account === this.selectedAccount
      );

      item.Amount = item.Transactions.reduce((acc, currentValue) => {
        return (acc += currentValue.AMT);
      }, 0);

      item.FeeAmount = item.Transactions.reduce(
        (curr, next) => (curr += next.FeeType === FeeType.TRF ? 0.5 : 0.7),
        0
      );

      this.transactionItems.push(item);

      sevenDaysAgo = moment(sevenDaysAgo)
        .add(1, "day")
        .toDate();
    }

    return this.transactionItems;
  }
}
