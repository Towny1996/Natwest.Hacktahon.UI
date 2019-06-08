import { TransactionType } from '../@Enums/transaction-type.enum';

export class Transaction {
    Date: Date;
    Fee: number;
    Amount: number;
    Type: TransactionType;    
}
