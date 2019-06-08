import { TransactionType } from '../@Enums/transaction-type.enum';
import { FeeType } from '../@Enums/fee-type.enum';

export class Transaction {
    Date: Date;
    PaymentType: TransactionType;
    AMT: number;
    FeeType: FeeType;
    Account: string;
    IsFee: boolean;
    Fee: number;
}
