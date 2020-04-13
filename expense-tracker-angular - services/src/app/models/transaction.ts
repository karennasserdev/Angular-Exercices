export class Transaction {
    id: number;
    text: string;
    amount: number;

    constructor (text: string, amount: number, id?:number) {
        this.text = text;
        this.amount = amount;
        this.id = id ||Math.round(Math.random() * 10000);
    }
}