import { Transaction } from "./transaction.model";

export class TransactionItem {
  Day: string;
  Transactions: Transaction[];
  Amount: number;
  FeeAmount: number;
}
