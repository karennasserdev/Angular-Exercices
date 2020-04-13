//ficheiro modelo que representa uma transação.

//↓↓↓ Criar um interface, que diferente das classes, não tem métodos nem implementações, é so um objeto que obrigatoriamente tem que ter essas propriedades. 

//↓↓↓ sempre que eu mandar Transaction pra qualquer lado saberei que sempre terá essas 3 propriedades.

// export interface Transaction {
//     id: number;
//     text: string;
//     amount: number;
// }

//↓↓↓ Criar classe Transaction
export class Transaction {
    id: number;
    text: string;
    amount: number;

    constructor(text: string, amount: number, id?: number) { //id opcional
        this.text = text;
        this.amount = amount;
        this.id = id || Math.floor(Math.random() * 1000000); //id random
    }
}






