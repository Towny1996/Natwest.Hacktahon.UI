import { Component, OnInit, ModuleWithComponentFactories } from "@angular/core";
import { Transaction } from "../@Models/transaction.model";
import { ChartFilterType } from "../@Enums/chart-filter-type.enum";
import * as moment from "moment";
import { FeeType } from "../@Enums/fee-type.enum";
import { TransactionType } from "../@Enums/transaction-type.enum";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  selectedFormat: ChartFilterType;
  summaryAmount: string = "£600";
  timePeriod: string = "week";

  crapData = [
    ["2019-06-02T02:59:43.1Z", "Dbit",100.00, "TRF","Account1", false,""],
    ["2019-06-02T02:59:43.1Z", "Dbit",100.00, "TRF","Account1", true,"FEE DR"],

    ["2019-05-03T02:59:43.1Z", "CRDT",100.00, "TRF","Account1", false,"",""],
    ["2019-05-03T02:59:43.1Z", "DBIT",100.00, "TRF","Account1", true,"FEE CR"],

    ["2019-06-03T02:59:43.1Z", "DBIT",100.00, "IPO","Account1", false,""],
    ["2019-06-03T02:59:43.1Z", "DBIT",100.00, "IPO","Account1", true,"FEE DR"],

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

    ["2019-06-04T02:59:43.1Z", "DBIT",100.00, "PAY","Account1", false,""],
    ["2019-06-04T02:59:43.1Z", "DBIT",100.00, "PAY","Account1", true,"FEE DR"],

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

    ["2019-06-05T02:59:43.1Z", "CRDT",100.00, "1855","Account1", false,""],
    ["2019-06-05T02:59:43.1Z", "DBIT",100.00, "1855","Account1", true,"FEE CR"],

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

    ["2019-05-06T02:59:43.1Z", "CRDT",100.00, "SPIT","Account1", false,""],
    ["2019-05-06T02:59:43.1Z", "DBIT",100.00, "SPIT","Account1", true,"FEE CR"],

    ["2019-06-06T02:59:43.1Z", "DBIT",100.00, "MMD","Account1", false,""],
    ["2019-06-06T02:59:43.1Z", "DBIT",100.00, "MMD","Account1", true,"FEE DR"],

    ["2019-06-07T02:59:43.1Z", "CRDT",100.00, "MMD","Account1", false,""],
    ["2019-06-07T02:59:43.1Z", "DBIT",100.00, "MMD","Account1", true,"FEE CR"],

    ["2019-06-08T02:59:43.1Z", "DBIT",100.00, "SPIN","Account1", false,""],
    ["2019-06-08T02:59:43.1Z", "DBIT",100.00, "SPIN","Account1", true,"FEE DR"],

    ["2019-06-09T02:59:43.1Z", "DBIT",100.00, "SPIN","Account1", false,""],
    ["2019-06-09T02:59:43.1Z", "DBIT",100.00, "SPIN","Account1", true,"FEE CR"],

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

    ["2019-06-03T02:59:43.1Z", "DBIT",100.00, "SPOU","Account1", false,""],
    ["2019-06-02T02:59:43.1Z", "DBIT",100.00, "SPOU","Account1", true,"FEE CR"],

    ["2019-06-04T02:59:43.1Z", "DBIT",8.00, "","Account1", true,"A/C FEE"],
    ["2019-06-05T02:59:43.1Z", "DBIT",44.17, "","Account1", true,"INT CR"],
    ["2019-06-02T02:59:43.1Z", "DBIT",160.71, "","Account1", true,"INT DR"],

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

    ["2019-06-05T02:59:43.1Z", "DBIT",100.00, "IPO","Account2", false,""],
    ["2019-06-09T02:59:43.1Z", "DBIT",100.00, "IPO","Account2", true,"FEE DR"],

    ["2019-06-08T02:59:43.1Z", "CRDT",100.00, "IPO","Account2", false,""],
    ["2019-06-08T02:59:43.1Z", "DBIT",100.00, "IPO","Account2", true,"FEE CR"],

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

  constructor() {}

  ngOnInit() {
    this.MapMockData();
  }

  MapMockData() {
    this.crapData.forEach(x => {
      const tran = new Transaction();
      tran.Date = moment(x[0].toString()).toDate();
      tran.PaymentType =
        [1].toString().toLowerCase() === "dbit"
          ? TransactionType.Debit
          : TransactionType.Credit;
      tran.AMT = parseInt(x[2].toString());
      tran.FeeType = x[3] === "TRF" ? FeeType.TRF : FeeType.IPO;
      tran.Account = x[4].toString();

      this.mockData.push(tran);
    });

    console.log(this.mockData);
  }
}
