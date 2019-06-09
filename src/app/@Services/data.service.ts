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
    [
      "2019-06-02T02:59:43.1Z",
      "Dbit",
      100.0,
      "TRF",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-02T02:59:43.1Z",
      "Dbit",
      100.0,
      "TRF",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-03T02:59:43.1Z",
      "CRDT",
      100.0,
      "TRF",
      "Natwest Business Account",
      false,
      "",
      ""
    ],
    [
      "2019-06-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "TRF",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "IPO",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-04T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-04T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "PAY",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-05T02:59:43.1Z",
      "CRDT",
      100.0,
      "1855",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-05T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-06T02:59:43.1Z",
      "CRDT",
      100.0,
      "SPIT",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-06T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-06T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-06T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-07T02:59:43.1Z",
      "CRDT",
      100.0,
      "MMD",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-07T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-08T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-08T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-09T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-09T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-02T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Natwest Business Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-04T02:59:43.1Z",
      "DBIT",
      8.0,
      "",
      "Natwest Business Account",
      true,
      "A/C FEE"
    ],
    [
      "2019-06-05T02:59:43.1Z",
      "DBIT",
      44.17,
      "",
      "Natwest Business Account",
      true,
      "INT CR"
    ],
    [
      "2019-06-02T02:59:43.1Z",
      "DBIT",
      160.71,
      "",
      "Natwest Business Account",
      true,
      "INT DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "Dbit",
      100.0,
      "TRF",
      "Natwest Business Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "Dbit",
      100.0,
      "TRF",
      "Natwest Business Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "TRF",
      "Premium Account",
      false,
      "",
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "TRF",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-05T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-09T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-08T02:59:43.1Z",
      "CRDT",
      100.0,
      "IPO",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-08T02:59:43.1Z",
      "DBIT",
      100.0,
      "IPO",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "PAY",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "PAY",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-03T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "1855",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "1855",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "SPIT",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIT",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "CRDT",
      100.0,
      "MMD",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "MMD",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPIN",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Premium Account",
      true,
      "FEE DR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Premium Account",
      false,
      ""
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      100.0,
      "SPOU",
      "Premium Account",
      true,
      "FEE CR"
    ],

    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      12.0,
      "",
      "Premium Account",
      true,
      "A/C FEE"
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      17.17,
      "",
      "Premium Account",
      true,
      "INT CR"
    ],
    [
      "2019-06-01T02:59:43.1Z",
      "DBIT",
      19.71,
      "",
      "Premium Account",
      true,
      "INT DR"
    ]
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

      if (this.selectedAccount === "Overall") {
        item.Transactions = transactions.filter(
          x => x.Date.getDate() == sevenDaysAgo.getDate()
        );
      } else {
        item.Transactions = transactions.filter(
          x =>
            x.Date.getDate() == sevenDaysAgo.getDate() &&
            x.Account === this.selectedAccount
        );
      }

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
