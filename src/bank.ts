// Определение интерфейса для клиента банка
export interface Client {
    id: number;
    name: string;
    accountBalance: number;
}

// Определение интерфейса для банковского счета
export interface BankAccount {
    accountNumber: string;
    balance: number;
    owner: Client;

    deposit(amount: number): void;
    withdraw(amount: number): void;
}

// Класс, представляющий банковский счет
export class Account implements BankAccount {
    accountNumber: string;
    balance: number;
    owner: Client;

    constructor(accountNumber: string, owner: Client, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Внесено ${amount} на счет ${this.accountNumber}. Новый баланс: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Снято ${amount} со счета ${this.accountNumber}. Новый баланс: ${this.balance}`);
        } else {
            console.log(`Недостаточно средств на счете ${this.accountNumber} для снятия ${amount}`);
        }
    }
}

// Пример использования
const client1: Client = { id: 1, name: "Иван Иванов", accountBalance: 1000 };
const client2: Client = { id: 2, name: "Петр Петров", accountBalance: 2000 };

const account1: BankAccount = new Account("1234567890", client1, 1000);
const account2: BankAccount = new Account("0987654321", client2, 2000);

account1.deposit(500);
account2.withdraw(1000);
